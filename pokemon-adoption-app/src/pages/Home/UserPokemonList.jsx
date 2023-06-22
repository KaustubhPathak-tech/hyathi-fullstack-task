import React from "react";
import "./Home.css";
import Pokemon from "./Pokemon";
import { useSelector } from "react-redux";

const UserPokemonList = ({ list }) => {
  var User = useSelector((state) => state.fetch_current_userReducer);

  console.log(list);
  return (
    <div>
      <>
        {list
          .filter((pokemon) => pokemon.userAdopted === User?.result?._id)
          .map((pokemon) => (
            <Pokemon pokemon={pokemon} key={pokemon._id} />
          ))}
      </>
      <br />
    </div>
  );
};

export default UserPokemonList;
