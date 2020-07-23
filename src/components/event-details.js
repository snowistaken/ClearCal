import React, { useState, useEffect } from 'react';
import API from '../api-service'
import { useCookies } from 'react-cookie'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import EventForm from './event-form';
import '../styles/event-details.css';
import Modal from 'react-awesome-modal';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Close from '@material-ui/icons/Close';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton';

function EventDetails(props) {

  const [ userId ] = useCookies(['cc-user-id']);
  const [ token ] = useCookies(['cc-token']);

  const [ editFormVisible, setEditFormVisible ] = useState(false)
  const [ eventToEdit, setEventToEdit ] = useState(null);

  const closeDetails = () => {
    props.closeDetails()
    setEventToEdit(null)
  }

  useEffect( () => {
    setEventToEdit(props.event)
    setEditFormVisible(false)
  }, [props.event])

  const updateEvents = (resp) => {
    props.updateEvents(resp)
  }

  const onDeleteClick = () => {
    confirmAlert({
      title: 'Confirm',
      message: 'Are you sure you would like to delete this event?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => API.deleteEvent(props.event.id, token['cc-token'], {organizer: userId['cc-user-id']})
        },
        {
          label: 'No',
          onClick: () => (console.log('closed'))
        }
      ]
    })
  }

  const onEditClick = () => {
    setEditFormVisible(true)
  }

  return (
    <div className='event-details' style={{width: '0px'}} >
      { props.event ? 
        (<Modal visible={props.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => closeDetails()}  className='event-details'>

          <IconButton aria-label="close window" component="span" className='close-button' size='small' onClick={() => props.closeDetails()}>
            <Close />
          </IconButton>

          <div style={{'margin-left': '15px'}}>
            <h3>Title: {props.event.title}</h3>
            <p>
              From: {props.event.start.toString()}<br/>
              To: {props.event.end.toString()}<br/>
              Details: {props.event.description}<br/>
            </p>
          </div>
          {props.userView 
          && String(userId['cc-user-id']) === String(props.event.organizer) ?
            (<div>
              <Fab color="secondary" aria-label="edit" size='small' onClick={onEditClick} className='edit-button'>
                <Edit />
              </Fab>
              <Fab color='default' aria-label="edit" size='small' onClick={onDeleteClick} className='trash-button'>
                <Delete />
              </Fab>
              { editFormVisible ? 
                <EventForm eventToEdit={eventToEdit} updateEvents={updateEvents} />
                : null
              }
            </div>) 
            : <></>}
        </Modal>) 
        : null
      }
    </div>
  )
}

export default EventDetails