import {useState} from "react";
// import Login from "../Components/Form/LoginForm";
import RegisterForm from "../Components/Form/RegisterForm";
import styled from "styled-components";

const Login = ( ) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <>
            <h1>ログイン</h1>
        </>
    )
} 


export default Login;