import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./Style/index.css"
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


