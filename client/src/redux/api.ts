import axios from "axios";
import store from "./CreateStore";

const API = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
