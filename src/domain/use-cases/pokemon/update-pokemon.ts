import { UpdatePokemonDto } from "../../dtos";
import { PokemonEntity } from "../../entities/pokemon.entity";
import { PokemonRepository } from "../../repositories/pokemon.repository";

export interface UpdatePokemonUseCase{
    execute(dto:UpdatePokemonDto):Promise<PokemonEntity>
}

export class UpdatePokemon implements UpdatePokemonUseCase{
    constructor(
        private readonly repository: PokemonRepository,
    ){}
    execute(dto: UpdatePokemonDto): Promise<PokemonEntity> {
        return this.repository.updateById(dto);
    }
}