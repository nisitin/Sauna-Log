import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./Page/Home";
import Register from "./auth/Register";
import Login from "./auth/Login";
// Components 
import {Header} from "./Components/Header"

import './App.css';


const App: React.FC = ()  =>{
  return (
  <>
    <BrowserRouter>
    <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
