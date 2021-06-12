import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const feedbackReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_FEELING' : 
   return {...state, feeling: action.payload};
      
  }
    if ( action.type === 'ADD_FEEDBACK' ) {
      return [...state, action.payload]
    }
    return state;
  }
  
//everycase is a differnt feedback getting added

const store = createStore(
    combineReducers({
      feedbackReducer
    }),
    applyMiddleware(logger)
  ) 

  ReactDOM.render(<Provider
    store={store}>
        <App />
        </Provider>, 
       document.getElementById('root'));
   registerServiceWorker();