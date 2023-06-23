import axios from "axios";
const API = axios.create({
  baseURL:
    "https://hyatiserver-4wxkfvvsy-kaustubhpathak-tech.vercel.app",
}); //http://localhost:7000 https://hyatiserver-4wxkfvvsy-kaustubhpathak-tech.vercel.app
export const signUp = (authData) => API.post("/user/signup", authData);
export const logIn = (authData) => API.post("/user/login", authData);
export const fetchAllPokemons = () => API.get("/pokemon/getAllPokemons");
export const adoptPokemon = (userData) =>
  API.patch("pokemon/adoptPokemon", userData);
export const feedPokemon = (Data) => API.patch("pokemon/feedPokemon", Data);
