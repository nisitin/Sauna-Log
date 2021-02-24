import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  AUTH_ERROR,
  USER_LOADED,
  USER_LOADING,
} from "../../constants/index";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        isAuthenticated: true,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isLoading: false,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}
