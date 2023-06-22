import React from "react";
import "./Home.css";
import Pokemon from "./Pokemon";

const PokemonList = ({ list }) => {
  return (
    <div>
      <>
        {list.filter((pokemon)=>pokemon.adopted===0).map((pokemon) => (
          <Pokemon pokemon={pokemon} key={pokemon._id} />
        ))}
      </>
      <br />
    </div>
  );
};

export default PokemonList;
