import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk'; // Waits and sees if any actions return a function instead of an object

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';

// Middleware
const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

// Provider component is passing down the store to all the components
// down the component tree from the App
ReactDOM.render(<Provider store={store}>  
                    <App />
                </Provider>, 
                document.getElementById('root'));
registerServiceWorker();
