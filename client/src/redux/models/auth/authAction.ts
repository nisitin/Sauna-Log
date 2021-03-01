import axios from "axios";
import { LOGOUT } from "../../constants";
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
};

export const Logout = () => {
  return {
    type: LOGOUT,
  };
};
