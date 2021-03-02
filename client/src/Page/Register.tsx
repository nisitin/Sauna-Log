import React,{useState} from "react";
import RegisterForm from "../Components/Form/RegisterForm";
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "../redux/models/rootreducer";
import { Redirect } from "react-router-dom";

interface RegisterValues {
    name: string
    email: string,
    password: string,
    password2: string
}

const Register =  () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')


    const dispatch = useDispatch();
    const {isAuthenticated, isLoading} = useSelector((state: RootState) => state.auth);

    // ここでサインインされていなかったらホームページに戻る処理
    if (isAuthenticated){
        return <Redirect to="/"/>
    }

    return (
        <div>
            <h1>登録</h1>
            <RegisterForm 
                
            />
        </div>
    )
}

export default Register;