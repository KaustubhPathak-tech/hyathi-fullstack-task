import React from "react";
import PokemonList from "./PokemonList";
import UserPokemonList from "./UserPokemonList";
import "./Home.css";
import { useSelector } from "react-redux";
import { Paper } from "@mui/material";

const Home = () => {
  var User = useSelector((state) => state.fetch_current_userReducer);
  const pokemonList = useSelector((state) => state.pokemonsReducer);
  console.log(pokemonList);
  function check(pok) {
    var ans = false;
    for (var i = 0; i < pokemonList.length; i++) {
      if (pokemonList[i].adopted === 0) {
        ans = true;
        break;
      }
    }
    return ans;
  }
  return (
    <div className="home-container">
      {User ? (
        <>
          <br />
          <Paper
            elevation={0}
            style={{
              width: "90%",
              marginLeft: "5%",
              backgroundColor:"#d7d7d7"
            }}
          >
            <div className="User-Pokemons">
              <div className="User-Pokemons-heading">Adopted Pokemons</div>
              <div className="User-Pokemons-list">
                <UserPokemonList list={pokemonList} />
              </div>
            </div>
          </Paper>
          <hr />
        </>
      ) : (
        <></>
      )}

      <div className="pokemons">
        <br />
        <div className="pokemon-intro-container">
          {check() ? (
            <h1>Available Pokemons for adoption</h1>
          ) : (
            <h1>Sorry ! no more Pokemons available to adopt.</h1>
          )}
        </div>

        <div className="pokemon-list-container">
          <PokemonList list={pokemonList} />
        </div>
        <br />
      </div>
    </div>
  );
};

export default Home;
