import axios from "axios";
import { LOGOUT, REGISTER_SUCCESS } from "../../constants";
import { RegisterUser } from "./authTypes";

export const loadUser = () => (dispatch: Function, getState: Function) => {
  dispatch({ type: "aaa" });

  axios.get("/api/auth/user");
};

export const Register = ({
  name,
  email,
  password,
  password2,
}: RegisterUser) => (dispatch: Function) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //bodyにリクエストする処理
  const body = JSON.stringify({ name, email, password, password2 });

  axios
    .post("/api/auth/register", body, config)
    .then((res) =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch();
    });
};

export const Logout = () => {
  return {
    type: LOGOUT,
  };
};
