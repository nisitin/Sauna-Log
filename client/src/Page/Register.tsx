import React,{useState} from "react";
import RegisterForm from "../Components/Form/RegisterForm";
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "../redux/models/rootreducer";
import {Register} from "../redux/models/auth/authAction";
import {RegisterUser} from "../redux/models/auth/authTypes";
import { Redirect } from "react-router-dom";


const Register =  () => {

    const dispatch = useDispatch();
    const {isAuthenticated, isLoading} = useSelector((state: RootState) => state.auth);


    // ここでサインインされていなかったらホームページに戻る処理
    if (isAuthenticated){
        return <Redirect to="/"/>
    }

    const FormSubmit = (formSubmit: RegisterUser) => {
        const {name, email, password, password2} = formSubmit;

        dispatch(Register({name, email, password, password2}))
    }

    return (
        <div className="register-container"> 
            <form　className="register-form">
                <div className="name">
                    <label>お名前</label>
                    <input name="name" placeholder="佐藤太郎" />
                </div>
                <div className="email">
                    <label>メールアドレス</label>
                    <input name="email" placeholder="aaaa@sample.com"  />
                </div>
                <div className="password">
                    <label>パスワード</label>
                    <input name="password" placeholder="xxxxxxxx" />
                </div>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Register;