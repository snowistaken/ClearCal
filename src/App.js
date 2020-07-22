import React, { useState, useEffect } from 'react';
import './App.css';
import CalendarContainer from './components/calendar-container';
import EventForm from './components/event-form'
import './react-slide-out/src/index.css';
import SimpleSlider from './react-slide-out/src/index.jsx';
import { useCookies } from 'react-cookie'

function App() {

  const [ token, setToken ] = useCookies(['cc-token']);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([]);
  const [isOpen, setOpen] = useState(false)

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
    window.prompt('You clicked the other button!')
  }

  const closeSlider = () => {
    setOpen(false)
    setSelectedEvent(null)
  }

  const eventCreated = newEvent => {
    const newEvents = [...events, newEvent];
    setEvents(newEvents);
  }

  return (
    // <React.Fragment className='App'>
      <div className='layout'>
        <button className='button, login' onClick={() => login()} >Log In</button>
        <button className='button, calendar-buttons' onClick={createEvent} >Create New Event</button>
        <CalendarContainer setSelectedEvent={setSelectedEvent} setOpen={setOpen} events={events}/>
          { selectedEvent ? (
            <SimpleSlider
              title={selectedEvent.title}
              footer={
              <div style={{padding: '15px'}}>
                <button onClick={() => closeSlider()}>Close Slider</button>
              </div>
              }
            isOpen={isOpen}
            onOutsideClick={() => (closeSlider())}>
            <div>
              Start: {selectedEvent.start.toString()} - End: {selectedEvent.end.toString()}
              <EventForm eventToEdit={selectedEvent} updateEvents={updateEvents} eventCreated={eventCreated}/> 
            </div>
          </SimpleSlider>
          ) : 
          <SimpleSlider
            width={0}
            title='null'
            footer={
            <div style={{padding: '15px'}}>
              <button onClick={() => closeSlider()}>Close Slider</button>
            </div>
            }
            isOpen={isOpen}
            onOutsideClick={() => (closeSlider())}>
            <div>null</div>
          </SimpleSlider> }
      </div>
    // </React.Fragment>
  );
}

export default App;
