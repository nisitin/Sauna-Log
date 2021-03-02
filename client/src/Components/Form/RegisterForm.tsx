import React,{FC, useState} from "react";
import {useForm} from "react-hook-form";


interface RegisterValues {
    name: string
    email: string,
    password: string,
    password2: string
}
//ここはinterface登録するときに必要な部分


const RegisterForm = () => {
    const {register, setValue, handleSubmit, errors} = useForm<RegisterValues>();
    const onSubmit = handleSubmit(({name, email, password, password2}) => {
        console.log(onSubmit);
    })

    return (
        <form onSubmit={onSubmit}>
            <label>お名前</label>
            <input name="name" ref={register}/>
            <label>メールアドレス</label>
            <input name="email" />
            <label>パスワード</label>
            <input name="password" type="password"/>
            <label>パスワードの確認</label>
            <input name="password2" type="password"/>
            <button type="submit">登録</button>
        </form>
    )
}

export default RegisterForm;