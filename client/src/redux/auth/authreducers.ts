import { SET_ERRORS, LOADING_UI, CLEAR_ERRORS } from "../../constants/index";

const initialState = {
  loading: false,
  errors: null,
};

export interface loginUsers {
  email: string;
  name: string;
  password: string;
}

export interface registerUser {
  email: string;
  password: string;
}

export const initUser = (): registerUser => ({
  email: "",
  password: "",
});

export default function (state = initialState, action: any) {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: null,
      };
  }
}
