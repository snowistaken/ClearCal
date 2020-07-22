import React from 'react';
import '../App.css';
import CalendarContainer from './calendar-container';
import EventDetails from './event-details'
import { useCookies } from 'react-cookie';
import Fab from '@material-ui/core/Fab';
import SvgIcon from '@material-ui/icons/Person';

function UserView(props) {

  const [ token ] = useCookies(['cc-token']);

  return (
      <div className='layout'>
      { token['cc-token'] ?
        <Fab variant="extended" className='login' size='medium' onClick={props.login}>
          <SvgIcon />
            Logout
        </Fab>
        :
        <Fab variant="extended" className='login' size='medium' onClick={props.login}>
          <SvgIcon />
            Login
        </Fab>
      }
      <CalendarContainer setSelectedEvent={props.setSelectedEvent} openDetails={props.openDetails} events={props.events}/>
      <EventDetails closeDetails={props.closeDetails} visible={props.visible} event={props.selectedEvent}></EventDetails>
    </div>
  );
}

export default UserView;