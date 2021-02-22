import { Dispatch } from "redux";
import axios from "axios";
import {
  AuthAction,
  RegisterUser,
  loginInUser,
  currentUser,
} from "../auth/authTypes";
import { setAuthToken } from "../auth/auth.util";
import { History } from "history";
import { AUTH_ERROR } from "../../constants";

export const registerUser = (userData: RegisterUser, history: History) => (
  dispatch: Dispatch<AuthAction>
) => {
  axios
    .post("http://localhost:8000/api/users/register", userData)
    .then((res) => {
      console.log(res);
      history.push("/login");
    })
    .catch((err) => {
      dispatch({
        type: AUTH_ERROR,
      });
    });
};
