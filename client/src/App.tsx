import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./Page/Home";
import Login from "./Page/Login";
import Register from "./Page/Register";
import LoginForm from "./Components/Form/LoginForm";
import RegisterForm from "./Components/Form/RegisterForm";
// Components 
import {Header} from "./Components/Header"




const App: React.FC = ()  =>{
  return (
  <>
    <BrowserRouter>
    <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
