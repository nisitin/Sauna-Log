import { LOGIN_START, LOGIN_SUCCESS } from "../../constants/actionType";

export const loginStart = (email: string, password: string) => ({
  type: LOGIN_START,
  payload: {
    email,
    password,
  },
});
