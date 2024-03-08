
import { PokemonEntity } from "../../entities/pokemon.entity";
import { PokemonRepository } from "../../repositories/pokemon.repository";

export interface GetPokemonsUseCase{
    execute():Promise<PokemonEntity[]>
}

export class GetPokemons implements GetPokemonsUseCase{
    constructor(
        private readonly repository: PokemonRepository,
    ){}
    execute(): Promise<PokemonEntity[]> {
        return this.repository.getAll();
    }
}