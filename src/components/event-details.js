import React from 'react';

function EventDetails(props) {
  const selectedEvent = props.selectedEvent

  return (
    <React.Fragment>
      { selectedEvent ? (
        <div>
        <h2>{selectedEvent.title}</h2>
        <h3>Start: {selectedEvent.start.toString()} - End: {selectedEvent.end.toString()}</h3>
        {/* <p>{selectedEvent.description}</p> */}
        </div>
      ) : null }
    </React.Fragment>
  )
}

export default EventDetails