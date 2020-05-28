import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './fonts/Kormotech.ttf';
import './fonts/CoreSansA45Regular.otf';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import allReducers from './_reducers';
import ReduxThunk from 'redux-thunk';

const store = createStore(
    allReducers,
    compose(
      applyMiddleware(ReduxThunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
