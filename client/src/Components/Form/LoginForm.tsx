import React from "react";
import {useForm} from "react-hook-form"


interface Login {
    email: string,
    password: string   
}

const LoginForm = () => {
  const {register,handleSubmit, errors} = useForm<Login>(); 
    const onSubmit = handleSubmit(({email, password}) => {
        console.log(email, password);
    })

    return (
        <>
           <input name="email" ref={register}/>
           <input name="password" ref={register}/>
           <button type="submit">ログイン</button>
        </>
    )
}

export default LoginForm;