import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//redux
//redux
import {createStore} from "redux";
import {Provider} from "react-redux";
import store from "./redux/CreateStore";


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


