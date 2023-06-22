import React from "react";

import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { adoptPokemon, feedPokemon } from "../../actions/pokemons";

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
  const handleFeed = (e) => {
    e.preventDefault();
    dispatch(feedPokemon({ name: pokemon.name }));
  };
  var imogi="✌️";
  if(pokemon.health<1){
    imogi="🚨 very weak "
  }
  else if(pokemon.health===1){
    imogi="😪 Weak"
  }
  else if(pokemon.health===2){
    imogi="🙂 Normal"
  }
  else if(pokemon.health===3){
    imogi="😊 Strong"
  }
  else if(pokemon.health>3){
    imogi="💪 very strong"
  }

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
        <span style={{color:"green"}}>Health : </span> {imogi}
        <br />
      </div>
      {pokemon.adopted === 0 ? (
        <>
          <div className="action-buttons">
            <button className="btn btn-primary" onClick={handleAdoption}>
              Adopt me
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="action-buttons">
            <button className="btn btn-primary" onClick={handleFeed}>
              Feed me
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Pokemon;
