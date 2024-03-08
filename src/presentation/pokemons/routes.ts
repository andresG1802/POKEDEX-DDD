import { Router } from "express";
import { PokemonsController } from "./controller";
import { PokemonDataSourceImpl } from "../../infrastructure/datasource/pokemon.datasource.impl";
import { PokemonRepositoryImpl } from "../../infrastructure/repositories/pokemon.repository.impl";

export class PokemonRoutes{
    static get routes():Router{
        const router = Router();
        const datasource = new PokemonDataSourceImpl();
        const pokemonRepository = new PokemonRepositoryImpl(datasource);
        const pokemonsController = new PokemonsController(pokemonRepository);


        router.get('/',pokemonsController.getPokemons);
        router.get('/:id',pokemonsController.getPokemonById);
        router.post('/',pokemonsController.createPokemon);
        router.put('/:id',pokemonsController.updatePokemon);
        router.delete('/:id',pokemonsController.deletePokemon);

        return router;
    }
}