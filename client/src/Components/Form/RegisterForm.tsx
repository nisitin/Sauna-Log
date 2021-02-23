import React,{FC, useState} from "react";
import {useForm} from "react-hook-form";
// import {RootState} from "../../redux/models/rootreducer";

// interface Props {
//     onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//     onSubmit: (e: React.FormEvent) => void;
//     registerRation: RegisterValues
// }

interface RegisterValues {
    name: string
    email: string,
    password: string,
    password2: string
}
//ここはinterface登録するときに必要な部分


const RegisterForm = () => {
    const {register, setValue, handleSubmit, errors} = useForm();

   


    return (
        <>
           
        </>
    )
}

export default RegisterForm;