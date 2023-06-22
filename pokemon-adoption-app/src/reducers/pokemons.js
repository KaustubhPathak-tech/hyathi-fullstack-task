const pokemonsReducer = (states = [], action) => {
  switch (action.type) {
    case "FETCH_POKEMONS":
      return action.payload;
    case "ADOPT_POKEMON":
      return action.payload;
    default:
      return states;
  }
};

export default pokemonsReducer;
