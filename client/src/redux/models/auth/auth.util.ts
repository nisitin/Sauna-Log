import API from "../../api";

export const setAuthToken = (token: string) => {
  if (token) {
    API.defaults.headers.common["x-auth-token"] = token;
    localStorage.setItem("sauna-token", token);
  } else {
    delete API.defaults.headers.common["x-auth-token"];
    localStorage.removeItem("sauna-token");
  }
};
