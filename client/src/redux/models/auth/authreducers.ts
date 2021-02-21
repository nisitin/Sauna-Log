import {AuthState, AuthAction} from "../auth/authTypes";
import {LOGIN, } from "../../constants/index";

const initialState: AuthState = {
  token : localStorage.getItem('cstoken'),
  isAuthenticated: null,
  loading: false,
  user: null
};
//ここは何もない状態のものを指している

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch(action.type){
   
}




export default authReducer