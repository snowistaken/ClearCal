import React, {useState, useEffect} from 'react'
import API from '../api-service'
import { useCookies } from 'react-cookie'


function EventForm(props) {
 
  const [ token ] = useCookies(['mr-token']);

  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ start, setStart ] = useState('');
  const [ end, setEnd ] = useState('');

  useEffect( () => {
    if (props.eventToEdit)
      setTitle(props.eventToEdit.title)
      setDescription(props.eventToEdit.description)
  }, [props.eventToEdit])

  const updateClicked = () => {
    API.updateEvent(props.eventToEdit.id, {title: title, description: description, all_day: false, start: props.eventToEdit.start, end: props.eventToEdit.end, organizer: '1', shifts:[]}, token['cc-token'])
    .then( resp => props.updateEvents(resp))
    .catch( error => console.log(error))
  }

  const createClicked = () => {
    API.createEvent({title, description, all_day: false, start, end, organizer: '1', shifts:[]}, token['cc-token'])
    .then( resp => console.log(resp))
    .then( window.location.href = '/calendar' )
    .catch( error => console.log(error))
  }

  return (
    <React.Fragment>
      { props.eventToEdit ? (
        <div>
          <label htmlFor="title">Title</label><br/>
          <input id="title" type="text" placeholder="title" value={title}
            onChange={ evt => setTitle(evt.target.value) }
          /><br/>
          <label htmlFor="description" id="description">Description</label><br/>
          <textarea id="description" type="text" placeholder="description" value={description}
            onChange={ evt => setDescription(evt.target.value) }>
          </textarea><br/>
          <button onClick={updateClicked}>Update</button>
          
        </div>
      ) : 
        <div>
          <label htmlFor="title">Title</label><br/>
          <input id="title" type="text" placeholder="title" value={title}
            onChange={ evt => setTitle(evt.target.value) }
          /><br/>
          <label htmlFor="description" id="description">Description</label><br/>
          <textarea id="description" type="text" placeholder="description" value={description}
            onChange={ evt => setDescription(evt.target.value) }>
          </textarea><br/>
          <label htmlFor="start" id="start">Start</label><br/>
          <textarea id="start" type="date" placeholder="start" value={start}
            onChange={ evt => setStart(evt.target.value) }>
          </textarea><br/>
          <label htmlFor="end" id="end">End</label><br/>
          <textarea id="end" type="date" placeholder="end" value={end}
            onChange={ evt => setEnd(evt.target.value) }>
          </textarea><br/>
          <button onClick={createClicked}>Add</button>
        </div>
      }
      </React.Fragment>
    )
}

export default EventForm;