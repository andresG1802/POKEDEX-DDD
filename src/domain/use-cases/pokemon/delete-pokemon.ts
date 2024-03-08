import { CreatePokemonDto, UpdatePokemonDto } from "../../dtos";
import { PokemonEntity } from "../../entities/pokemon.entity";
import { PokemonRepository } from "../../repositories/pokemon.repository";

export interface DeletePokemonUseCase{
    execute(id:number):Promise<PokemonEntity>
}

export class DeletePokemon implements DeletePokemonUseCase{
    constructor(
        private readonly repository: PokemonRepository,
    ){}
    execute(id:number): Promise<PokemonEntity> {
        return this.repository.deleteById(id);
    }
}