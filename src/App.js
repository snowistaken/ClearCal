import React, { useState, useEffect } from 'react';
import './App.css';
import CalendarContainer from './components/calendar-container';
import EventForm from './components/event-form'
import EventDetails from './components/event-details'
import { useCookies } from 'react-cookie';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import SvgIcon from '@material-ui/icons/Person';

function App() {

  const [ token, setToken ] = useCookies(['cc-token']);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([]);
  const [ visible, setVisible ] = useState(false)

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
  }, [])

  const formatEvents = (events) => {
    const formattedEvents = events.map(event => {
      return ({
        id: event.id,
        title: event.title,
        description: event.title,
        allDay: false,
        start: new Date (event.start),
        end: new Date (event.end)
      })
    })
    console.log(formattedEvents)
    setEvents(formattedEvents)
  }

  const updateEvents = newEvent => {
    const newEvents = events.map( oldEvent => {
      if (oldEvent.id === newEvent.id) {
        return newEvent;
      }
      return oldEvent;
    })
    setEvents(newEvents)
    setSelectedEvent(null)
  }

  const createEvent = () => {
    window.prompt('You clicked the button!')
  }

  const login = () => {
    window.location.href = '/auth'
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
    // <React.Fragment className='App'>
      <div className='layout'>
        <Fab variant="extended" className='login' size='medium'>
          <SvgIcon onClick={login}/>
            Login
        </Fab>
        {/* <button className='button, calendar-buttons' onClick={createEvent} >Create New Event</button> */}
        <Tooltip title='Create Event'>
          <Fab color="primary" aria-label="add" className='calendar-buttons' size='medium'>
            <AddIcon onClick={createEvent}/>
          </Fab>
        </Tooltip>
        <CalendarContainer setSelectedEvent={setSelectedEvent} openDetails={openDetails} events={events}/>
        <EventDetails closeDetails={closeDetails} visible={visible} event={selectedEvent}></EventDetails>
      </div>
    // </React.Fragment>
  );
}

export default App;
