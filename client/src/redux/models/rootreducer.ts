import { type } from "os";
import { combineReducers } from "redux";
import authReducer from "./auth/authreducers";

export const rootReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
