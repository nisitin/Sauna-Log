import {
  LOGIN,
  LOGOUT,
  USER_LOADING,
  SET_CURRENT_USER,
} from "../../constants/index";

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean | null;
  loading: boolean;
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

interface RegisterUser {
  name: string;
  email: string;
  password: string;
  password2: string;
}

interface SignInUser {
  email: string;
  password: string;
}

interface logout {
  type: typeof LOGOUT;
}

export type AuthAction = RegisterUser | SignInUser | logout;
