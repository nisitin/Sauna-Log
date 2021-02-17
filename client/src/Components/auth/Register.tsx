import React,{useState} from "react";


// interface Props {
//     onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
// }

const Register = () => {

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

export default Register;