import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
// thunk allows us to call dispatch from within action
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import marketReducer from './reducers/marketReducer'

import App from './App';

//store - storing global data
// compose combines middleware

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(marketReducer, composeEnhancers(applyMiddleware(thunk)))

 

// dispatcher will send action Object to reducer, reducer decides what to update in our current store and return new version of store

ReactDOM.render(
  
    <Provider store={store}>
      <Router>
        {/* app and any child component can set up routes/links insided components */}
    <App />
    </Router>
    </Provider>,
    // {/* Provider will make store global to app and any children */}

  document.getElementById('root'));


