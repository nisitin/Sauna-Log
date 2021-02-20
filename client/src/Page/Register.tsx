import React from "react"
import styled from "styled-components";
import RegisterForm from "../Components/Form/RegisterForm"

const Register = () => {
    return (
        <>
            <h1>登録</h1>
            {RegisterForm()}
        </>
    )
}

export default Register;