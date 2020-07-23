import React, { useState, useEffect } from 'react';
import './App.css';
import UserView from './components/user-view';
import StandardView from './components/standard-view';
import { useCookies } from 'react-cookie';

function App() {

  const tokenCookie = useCookies(['cc-token']);
  const token = tokenCookie[0]
  const deleteToken = tokenCookie[2]
  const deleteUserId  = useCookies(['cc-user-id'])[2];

  const [ selectedEvent, setSelectedEvent ] = useState(null);
  const [ events, setEvents ] = useState([]);
  const [ visible, setVisible ] = useState(false);
  const [ userView, setUserView ] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/events/", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then( resp => resp.json())
    .then( resp => formatEvents(resp))
    .catch( error => console.log(error) )
  }, []);

  useEffect( () => {

    if (token['cc-token'])
      setUserView(true)
    else
      setUserView(false);
  
  }, [token]);

  const formatEvents = (events) => {
    const formattedEvents = events.map(event => {
      return ({
        id: event.id,
        title: event.title,
        description: event.title,
        allDay: false,
        start: new Date (event.start),
        end: new Date (event.end),
        organizer: event.organizer
      })
    })
    console.log(formattedEvents)
    setEvents(formattedEvents)
  }

  const createEvent = () => {
    window.location.href = '/create-event'
  }

  const login = () => {
    window.location.href = '/auth'
  }

  const logout = () => {
    deleteToken(['cc-token']);
    deleteUserId(['cc-user-id']);
  }

  const closeDetails = () => {
    setVisible(false)
    setSelectedEvent(null)
  }

  const openDetails = () => {
    setVisible(true)
  }

  const eventCreated = newEvent => {
    const newEvents = [...events, newEvent];
    setEvents(newEvents);
  }

  return (
    <div>
      { userView ?
        (<UserView setEvents={setEvents} setSelectedEvent={setSelectedEvent} selectedEvent={selectedEvent} events={events} visible={visible} createEvent={createEvent} login={login} logout={logout} closeDetails={closeDetails} openDetails={openDetails} eventCreated={eventCreated} userView={userView} />)
        :
        (<StandardView setSelectedEvent={setSelectedEvent} selectedEvent={selectedEvent} events={events} visible={visible} createEvent={createEvent} login={login} logout={logout} closeDetails={closeDetails} openDetails={openDetails} eventCreated={eventCreated} userView={userView} />)
      }
    </div>
  );
};

export default App;
