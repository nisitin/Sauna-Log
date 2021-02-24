import axios from "axios";
import store from "./CreateStore";

//ここでaxiosを使った非同期処理

const API = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
