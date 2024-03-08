import { CreatePokemonDto, UpdatePokemonDto } from "../dtos";
import { PokemonEntity } from "../entities/pokemon.entity";

export abstract class PokemonDataSource{
    abstract create(createTodoDto:CreatePokemonDto): Promise<PokemonEntity>;
    
    //Todo:paginacion
    abstract getAll():Promise<PokemonEntity[]>;
    abstract findById(id:number) :Promise <PokemonEntity>;
    abstract updateById(updateTodoDto:UpdatePokemonDto):Promise<PokemonEntity>;
    abstract deleteById(id:number):Promise<PokemonEntity>;

}