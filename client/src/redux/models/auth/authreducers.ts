import { LOGIN, LOGOUT } from "../../../constants/index";

export interface LoginAction {
  type: typeof LOGIN;
  token: string;
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export interface AuthState {
  token: string;
}

const initialState: AuthState = {
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, token: action.token };
    case LOGOUT:
      return { token: null };
    default:
      return state;
  }
};
