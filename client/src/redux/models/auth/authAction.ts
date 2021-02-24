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

// export const registerUser = (userData: )
