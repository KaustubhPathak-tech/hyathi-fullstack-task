import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:7000" });
export const signUp = (authData) => API.post("/user/signup", authData);
export const logIn = (authData) => API.post("/user/login", authData);
