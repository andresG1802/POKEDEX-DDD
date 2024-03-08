import { Router } from "express";
import { PokemonRoutes } from "./pokemons/routes";


export class AppRoutes{
    static get routes():Router{
        const router = Router();

        router.use('/api/pokemons',PokemonRoutes.routes);

        return router;
    }
}