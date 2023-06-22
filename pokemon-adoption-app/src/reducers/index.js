import { combineReducers } from "redux";
import authReducer from "./auth";
import fetch_current_userReducer from "./currentUser";
import pokemonsReducer from "./pokemons";

export default combineReducers({
  authReducer,
  fetch_current_userReducer,
  pokemonsReducer
});
