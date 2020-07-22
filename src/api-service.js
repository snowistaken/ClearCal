const TOKEN = '71722537cba5568966954fe791c1d1556b3f9dad';

export default class API {
  static updateEvent(event_id, body) {
    return fetch(`http://127.0.0.1:8000/api/events/${event_id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${TOKEN}`
      },
      body: JSON.stringify( body )
    }).then( resp => resp.json())
  }

  static createEvent(body) {
    return fetch(`http://127.0.0.1:8000/api/events/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${TOKEN}`
      },
      body: JSON.stringify( body )
    }).then( resp => resp.json())
  }

  static deleteEvent(event_id) {
    return fetch(`http://127.0.0.1:8000/api/events/${event_id}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${TOKEN}`
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