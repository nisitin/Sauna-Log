import { AuthState, AuthAction } from "../auth/authTypes";
import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  LOGOUT,
  AUTH_ERROR,
  USER_LOADING,
  SET_CURRENT_USER,
} from "../../constants/index";

const initialState: AuthState = {
  token: localStorage.getItem("cstoken"),
  isAuthenticated: null,
  loading: false,
  user: null,
};
//ここは何もない状態のものを指している

export const authReducer = (
  state: AuthState = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case LOGOUT:
    case AUTH_ERROR:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
  }
};
