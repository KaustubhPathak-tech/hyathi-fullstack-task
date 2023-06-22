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
    return pok?.adopted === 1;
  }
  return (
    <div className="home-container">
      {User ? (
        <>
          <br />
          <Paper
            elevation={3}
            style={{
              width: "90%",
              marginLeft: "5%",
              backgroundColor: "#00C4FF",
            }}
          >
            <div className="User-Pokemons">
              <div className="User-Pokemons-heading">Your Pokemons</div>
              <div className="User-Pokemons-list">
                <UserPokemonList list={pokemonList} />
              </div>
            </div>
          </Paper>
        </>
      ) : (
        <></>
      )}

      <div className="pokemons">
        <br />
        {/* <div className="pokemon-intro-container">
          { ? (
            <h1>Sorry ! no more Pokemons available to adopt.</h1>
          ) : (
            <h1>Available Pokemons</h1>
          )}
        </div> */}

        <div className="pokemon-list-container">
          <PokemonList list={pokemonList} />
        </div>
        <br />
      </div>
    </div>
  );
};

export default Home;
