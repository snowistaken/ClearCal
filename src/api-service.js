export default class API {
  static updateEvent(event_id, body, token) {
    return fetch(`http://127.0.0.1:8000/api/events/${event_id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${token}`
      },
      body: JSON.stringify( body )
    }).then( resp => resp.json())
  }

  static createEvent(body, token) {
    return fetch(`http://127.0.0.1:8000/api/events/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      },
      body: JSON.stringify( body )
    }).then( resp => resp.json())
  }

  static deleteEvent(event_id, token) {
    return fetch(`http://127.0.0.1:8000/api/events/${event_id}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      },
    })
  }

  static loginUser(body) {
    return fetch(`http://127.0.0.1:8000/auth/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( body )
    }).then( resp => resp.json())
  }
}