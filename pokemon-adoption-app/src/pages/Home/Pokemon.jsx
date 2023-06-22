import React from "react";

import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { adoptPokemon } from "../../actions/pokemons";

const Pokemon = ({ pokemon }) => {
  var User = useSelector((state) => state.fetch_current_userReducer);
  const dispatch = useDispatch();
  const handleAdoption = (e) => {
    e.preventDefault();
    if (User === null) {
      alert("Please Login ");
    } else {
      dispatch(adoptPokemon({ userId: User.result._id, name: pokemon.name }));
    }
  };
  return (
    <div className="pokemon-container">
      <div className="img-container">
        <img src={pokemon.avatar} alt="pokemon_image" />
      </div>
      <div className="description-container">
        Name: {pokemon.name}
        <br />
        Age: {pokemon.age}
        <br />
        Breed: {pokemon.breed}
        <br />
        Health: {pokemon.health}/3
        <br />
      </div>
      <div className="action-buttons">
        <button className="btn btn-primary" onClick={handleAdoption}>
          Adopt me
        </button>
      </div>
    </div>
  );
};

export default Pokemon;
