import pokemon from "../models/pokemon.js";

export const getAllPokemons = async (req, res) => {
  try {
    const allPokemons = await pokemon.find();
    const allPokemonsDetails = [];

    //accessing each user details from database
    allPokemons.forEach((Pokemons) => {
      allPokemonsDetails.push({
        _id: Pokemons._id,
        avatar: Pokemons.avatar,
        name: Pokemons.name,
        age: Pokemons.age,
        breed: Pokemons.breed,
        health: Pokemons.health,
        adopted: Pokemons.adopted,
        userAdopted: Pokemons.userAdopted,
      });
    });
    res.status(200).json(allPokemonsDetails);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const adoptPokemon = async (req, res) => {
  const { userId, name } = req.body;
  try {
    const myPokemon = await pokemon.findOne({ name });
    const _id = myPokemon._id;
    const updatedPokemonstatus = await pokemon.updateOne(
      { name: myPokemon.name },
      { adopted: 1 }
    );
    const updatedPokemonOwner = await pokemon.updateOne(
      { name: myPokemon.name },
      { userAdopted: `${userId}` }
    );

    res.status(200).json({ updatedPokemonstatus, updatedPokemonOwner });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
