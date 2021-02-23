import React from "react";
import LoginForm from "../Components/Form/LoginForm"

const Login =  () => {
    return (
        <div>
            <h1>ログイン</h1>
            {LoginForm()}
        </div>
    )
}

export default Login;