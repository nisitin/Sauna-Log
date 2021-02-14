import {Link } from "react-router-dom";


 export const Header = () => {
    <>

        <Link className="nav-link" to="/">
            Home
        </Link>
        <Link className="nav-link" to="/register">
            登録
        </Link>
        <Link className="nav-link" to="/login">
            ログイン
        </Link>
    </>
}
