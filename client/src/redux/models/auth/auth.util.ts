import API from "../../api";

export const setAuthToken = (token: string) => {
  if (token) {
    API.defaults.headers.common["x-auth-token"] = token;
  }
};
