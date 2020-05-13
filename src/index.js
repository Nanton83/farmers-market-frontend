import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import App from './App';

//store - storing global data
// compose combines middleware

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

// dispatching action Object to reducer, reducer decides what to update in our current store and return new version of store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    {/* Provider will make store global to app and any children */}

  </React.StrictMode>,
  document.getElementById('root')
);


