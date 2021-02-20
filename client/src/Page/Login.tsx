import {useState} from "react";
// import Login from "../Components/Form/LoginForm";
import RegisterForm from "../Components/Form/RegisterForm";
import styled from "styled-components";
import LoginForm from "../Components/Form/LoginForm";

const Login = ( ) => {
 

    return (
        <>
            <h1>ログイン</h1>
            {LoginForm()}
        </>
    )
} 


export default Login;