import React from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';


function CalendarContainer(props) {
  const localizer = momentLocalizer(moment);

  const onSelectedEvent = selectedEvent => {
    props.setSelectedEvent(selectedEvent)
    props.openDetails(true)
  };

  return (
      <Calendar
        popup
        selectable
        localizer={localizer}
        events={props.events}
        defaultView={Views.MONTH}
        scrollToTime={new Date(1970, 1, 1, 6)}
        onSelectEvent={event => onSelectedEvent(event)}
        className='calendar'
      />
  );
};

// const localizer = momentLocalizer(moment)

// const propTypes = {}

// class Selectable extends React.Component {
//   constructor(...args) {
//     super(...args)

//     this.state = { events }
//   };
  
//   handleSelect = ({ start, end }) => {
//     const title = window.prompt('New Event name')
//     if (title)
//       console.log(this)
//       this.setState({
//         events: [
//           ...this.state.events,
//           {
//             start,
//             end,
//             title,
//           },
//         ],
//       })
//   }

//   render() {
//     const localizer = momentLocalizer(moment);

//     return (
//       <>
//         <Calendar
//           selectable
//           localizer={localizer}
//           events={this.state.events}
//           defaultView={Views.MONTH}
//           scrollToTime={new Date(1970, 1, 1, 6)}
//           defaultDate={new Date(2015, 3, 12)}
//           onSelectEvent={event => alert(event.title)}
          // onSelectSlot={this.handleSelect}
//           style={{ minHeight: '100vh' }}
//         />
//       </>
//     )
//   }
// }

// Selectable.propTypes = propTypes

export default CalendarContainer;