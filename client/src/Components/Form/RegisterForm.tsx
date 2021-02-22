import React,{FC, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/models/rootreducer";

interface Props {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent) => void;
}

interface Register {
    name: string
    email: string,
    password: string,
    password2: string
}
//ここはinterface登録するときに必要な部分


const RegisterForm: FC<Props> = ({onChange, onSubmit }) => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault()
       console.table({name, email, password})
    }

    return (
        <>
        <h1>登録</h1>
        <form>
            <div className="form-group-email">
                <input
                  type="text"
                  placeholder="佐藤　太郎"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  />
            </div>
            <div className="form-group-email">
                <input
                  type="email"
                  placeholder="aaa@sample.com"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
            </div>
            <div className="form-group-email">
                <input
                  type="text"
                  placeholder="xxxxxxxxx"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />
            </div>

             <button className="btn-submit">送信</button>
        </form>
        </>
    )
}

export default RegisterForm;