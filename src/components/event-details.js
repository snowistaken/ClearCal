import React, { useState, useEffect } from 'react';
import EventForm from './event-form';
import '../styles/event-details.css'
import Modal from 'react-awesome-modal';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Close from '@material-ui/icons/Close';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton';

function EventDetails(props) {

  const [ editFormVisible, setEditFormVisible ] = useState(false)

  const onDeleteClick = () => {
    alert('Are you sure you would like to delete this event?')
  }

  const onEditClick = () => {
    setEditFormVisible(true)
  }

  return (
    <div className='event-details'>
      { props.event ? 
        (<Modal visible={props.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => props.closeDetails()}>
          
            <Tooltip text='Close'>
              <IconButton aria-label="close window" component="span" className='close-button' size='small' onClick={() => props.closeDetails()}>
                <Close />
              </IconButton>
            </Tooltip>

          <div style={{'margin-left': '15px'}}>
            <h3>Title: {props.event.title}</h3>
            <p>
              From: {props.event.start.toString()}<br/>
              To: {props.event.end.toString()}<br/>
              Details: {props.event.description}<br/>
            </p>
          </div>

          { editFormVisible ? 
            <EventForm eventToEdit={props.event} updateEvents={props.updateEvents} />
          : null
          }

          {props.userView 
          // && (props.event.id == )
             ?
            (<div>
              <Fab color="secondary" aria-label="edit" size='small' onClick={onEditClick}>
                <Edit />
              </Fab>
              <Fab color='default' aria-label="edit" size='small' onClick={onDeleteClick}>
                <Delete />
              </Fab>
            </div>) 
            : <></>}

        </Modal>) 
        : null
      }
    </div>
  )
}

export default EventDetails