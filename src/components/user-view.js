import React from 'react';
import '../App.css';
import CalendarContainer from './calendar-container';
import EventDetails from './event-details'
import { useCookies } from 'react-cookie';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import SvgIcon from '@material-ui/icons/Person';

function UserView(props) {

  const [ token ] = useCookies(['cc-token']);

  const updateEvents = (newEvent) => {
    const newEvents = props.events.map( oldEvent => {
      if (oldEvent.id === newEvent.id) {
        return newEvent;
      }
      return oldEvent;
    })
    props.setEvents(newEvents)
    props.setSelectedEvent(null)
  };

  return (
      <div className='layout'>
        <link rel="stylesheet" media="screen" href="https://fontlibrary.org/face/public-sans" type="text/css"/>
        <div className='app-header'>ClearCal</div>
        { token['cc-token'] ?
          <Fab variant="extended" className='login' size='medium' onClick={props.logout}>
            <SvgIcon />
              Logout
          </Fab>
          :
          <Fab variant="extended" className='login' size='medium' onClick={props.login}>
            <SvgIcon />
              Login
          </Fab>
        };
        <Tooltip title='Create Event'>
          <Fab color="primary" aria-label="add" className='calendar-buttons' size='medium' onClick={props.createEvent}>
            <AddIcon />
          </Fab>
        </Tooltip>
        <CalendarContainer setSelectedEvent={props.setSelectedEvent} openDetails={props.openDetails} events={props.events}/>
        <EventDetails updateEvents={updateEvents} userView={props.userView} closeDetails={props.closeDetails} visible={props.visible} event={props.selectedEvent}></EventDetails>
      </div>
  );
};

export default UserView;