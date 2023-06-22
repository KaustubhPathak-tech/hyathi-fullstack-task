import * as api from "../api";

export const fetchAllPokemons = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllPokemons();
    dispatch({ type: "FETCH_POKEMONS", payload: data });
  } catch (error) {}
};

export const adoptPokemon = (userData) => async (dispatch) => {
  try {
    const { data } = await api.adoptPokemon(userData);
    // dispatch({ type: "ADOPT_POKEMON", payload: data });
    dispatch(fetchAllPokemons());
  } catch (error) {}
};

export const feedPokemon = (Data) => async (dispatch) => {
  try {
    const { data } = await api.feedPokemon(Data);
    // dispatch({ type: "ADOPT_POKEMON", payload: data });
    dispatch(fetchAllPokemons());
  } catch (error) {}
};