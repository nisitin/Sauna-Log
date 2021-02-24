import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  AUTH_ERROR,
  LOGOUT,
  USER_LOADING,
} from "../../constants/index";

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean | null;
  isLoading: boolean;
  user: currentUser | null;
}

export interface currentUser {
  id: number;
  name: string;
  email: string;
  avatar: string;
  createdAt: string;
  updateAt: string;
}

export interface RegisterUser {
  name: string;
  email: string;
  password: string;
  password2: string;
}

export interface loginInUser {
  email: string;
  password: string;
  password2: string;
}

interface logout {
  type: typeof LOGOUT;
}

interface AuthError {
  type: typeof AUTH_ERROR;
}

// interface LoginError {
//   type: typeof LOGIN_FAIL;
// }

// interface RegisterError {
//   type: typeof REGISTER_FAIL;
// }

interface UserLoadingAction {
  type: typeof USER_LOADING;
  payload: currentUser;
}
// interface UserLoaded {
//   type: typeof USER_LOADED;
// }

interface RegisterSuccessAction {
  type: typeof REGISTER_SUCCESS;
  payload: string;
}

interface loginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: string;
}

export type AuthAction =
  | logout
  | RegisterSuccessAction
  | UserLoadingAction
  // | UserLoaded
  | loginSuccess
  // | RegisterError
  // | LoginError
  | AuthError;
