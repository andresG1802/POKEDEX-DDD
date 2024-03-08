import { PokemonEntity } from "../../entities/pokemon.entity";
import { PokemonRepository } from "../../repositories/pokemon.repository";
export interface GetPokemonUseCase{
    execute(id:number):Promise<PokemonEntity>
}

export class GetPokemon implements GetPokemonUseCase{
    constructor(
        private readonly repository: PokemonRepository,
    ){}
    execute(id:number): Promise<PokemonEntity> {
        return this.repository.findById(id);
    }
}