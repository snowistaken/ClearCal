import React, {useState, useEffect} from 'react'
import API from '../api-service'


function Eventform(props) {

  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('this is a description');

  useEffect( () => {
    setTitle(props.eventToEdit.title)
    // setDescription(props.eventToEdit.description)
  }, [props.eventToEdit])

  const updateClicked = () => {
    API.updateEvent(props.eventToEdit.id, {title: title, description: description, all_day: false, start: props.eventToEdit.start, end: props.eventToEdit.end, organizer: '1', shifts:[]})
    .then( resp => props.updateEvents(resp))
    .catch( error => console.log(error))
  }

  const createClicked = () => {
    API.createEvent({title, description})
    .then( resp => props.eventCreated(resp))
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
          {
            props.eventToEdit.id ?
            <button onClick={updateClicked}>Update</button>
            : <button onClick={createClicked}>Add</button>
          }
          
        </div>
      ) : null }
      </React.Fragment>
    )
}

export default Eventform;