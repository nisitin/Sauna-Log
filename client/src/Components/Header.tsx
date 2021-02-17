import {Link } from "react-router-dom";
import styled from "styled-components";

const StyledComponent = styled.div`
    height: 300px
`;

 export const Header = () => {
     return (
    <StyledComponent>
        <Link className="nav-link" to="/">
            Home
        </Link>
        <Link className="nav-link" to="/register">
            登録
        </Link>
        <Link className="nav-link" to="/login">
            ログイン
        </Link>
    </StyledComponent>
     )
}


