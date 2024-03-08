import { CreatePokemonDto, UpdatePokemonDto } from "../dtos";
import { PokemonEntity } from "../entities/pokemon.entity";

export abstract class PokemonRepository{
    abstract create(createPokemonDto:CreatePokemonDto): Promise<PokemonEntity>;
    
    //Pokemon:paginacion
    abstract getAll():Promise<PokemonEntity[]>;
    abstract findById(id:number) :Promise <PokemonEntity>;
    abstract updateById(updatePokemonDto:UpdatePokemonDto):Promise<PokemonEntity>;
    abstract deleteById(id:number):Promise<PokemonEntity>;

}