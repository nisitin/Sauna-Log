import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./Components/Home";
import LoginForm from "./Components/Form/LoginForm";
import RegisterForm from "./Components/Form/RegisterForm";
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
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/login" component={LoginForm} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
