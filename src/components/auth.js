import React, { useState, useEffect } from 'react'
import API from '../api-service'
import { useCookies } from 'react-cookie'

function Auth(){

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ isLoginView, setIsLoginView ] = useState(true);

  const [ token, setToken ] = useCookies(['cc-token']);

  useEffect( () => {
    console.log(token);
    if(token['cc-token']) window.location.href = '/calendar'
  }, [token])

  const loginClicked = () => {
    API.loginUser({username, password})
    .then( resp => setToken('cc-token', resp.token))
    .catch( error => console.log(error) )
  }

  return (
    <div>
      <h1>Login</h1>
      
      <label htmlFor="username">Username</label><br/>
      <input id="username" type="text" placeholder="username" value={username}
        onChange={ evt => setUsername(evt.target.value) }
      /><br/>
      <label htmlFor="password" id="password">Password</label><br/>
      <input id="password" type="password" placeholder="password" value={password}
        onChange={ evt => setPassword(evt.target.value) } /><br/>
        <button onClick={loginClicked}>Login</button>
    </div>
  )
}

export default Auth;