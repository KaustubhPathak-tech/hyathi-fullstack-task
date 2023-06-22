import express from "express";
import { getAllPokemons,adoptPokemon } from "../controllers/pokemon.js";
const router = express.Router();
router.get("/getAllPokemons", getAllPokemons);
router.patch("/adoptPokemon",adoptPokemon);
export default router;
