import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Auth from './components/auth'
import EventForm from './components/event-form'
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'

ReactDOM.render(
    <React.StrictMode>
      <CookiesProvider>
          <BrowserRouter>
            <Route exact path="/auth" component={Auth} />
            <Route exact path="/create-event" component={EventForm} />
            <Route exact path="/" component={App} />
          </BrowserRouter>
        </CookiesProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
