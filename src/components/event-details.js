import React, { useState, useEffect } from 'react';
import '../styles/event-details.css'
import Modal from 'react-awesome-modal';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Close from '@material-ui/icons/Close';
import Edit from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

function EventDetails(props) {

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
              Details: {props.event.description}<br/>
              From: {props.event.start.toString()}<br/>
              To: {props.event.end.toString()}<br/>
            </p>
          </div>
            <Fab color="secondary" aria-label="edit" size='small'>
              <Edit />
            </Fab>
        </Modal>) : null
      }
    </div>
  )
}

export default EventDetails