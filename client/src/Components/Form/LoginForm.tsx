import React,{useState} from "react";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <>
            <h1>ログイン</h1>
            <form>
        
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

             <button>送信</button>
             </form>
        </>
    )
}

export default LoginForm;