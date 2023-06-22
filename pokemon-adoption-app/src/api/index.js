import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:7000" });
export const signUp = (authData) => API.post("/user/signup", authData);
export const logIn = (authData) => API.post("/user/login", authData);
export const fetchAllPokemons = () => API.get("/pokemon/getAllPokemons");
export const adoptPokemon = (userData) => API.patch("pokemon/adoptPokemon", userData);
