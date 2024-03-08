import { CreatePokemonDto } from "../../dtos";
import { PokemonEntity } from "../../entities/pokemon.entity";
import { PokemonRepository } from "../../repositories/pokemon.repository";

export interface CreatePokemonUseCase{
    execute(dto:CreatePokemonDto):Promise<PokemonEntity>
}

export class CreatePokemon implements CreatePokemonUseCase{
    constructor(
        private readonly repository: PokemonRepository,
    ){}
    execute(dto: CreatePokemonDto): Promise<PokemonEntity> {
        return this.repository.create(dto);
    }
}