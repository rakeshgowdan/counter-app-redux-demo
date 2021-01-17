import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import CounterComponent from './containers/CounterComponent'
import store from './store'
ReactDOM.render(
  <Provider store={store}>
    <CounterComponent />
  </Provider>,
  document.getElementById('root')
);
