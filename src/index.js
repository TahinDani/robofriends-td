import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots } from './reducers';
import 'tachyons';

// Middleware
const logger = createLogger();

const store = createStore(searchRobots, applyMiddleware(logger));

// Provider component is passing down the store to all the components
// down the component tree from the App
ReactDOM.render(<Provider store={store}>  
                    <App />
                </Provider>, 
                document.getElementById('root'));
registerServiceWorker();
