import { CreatePokemonDto, PokemonDataSource, PokemonEntity, PokemonRepository, UpdatePokemonDto } from "../../domain";


export class PokemonRepositoryImpl implements PokemonRepository{
    constructor(
        private readonly datasource:PokemonDataSource,
    ){}
    create(createPokemonDto: CreatePokemonDto): Promise<PokemonEntity> {
        return this.datasource.create(createPokemonDto);
    }
    getAll(): Promise<PokemonEntity[]> {
        return this.datasource.getAll();
    }
    findById(id: number): Promise<PokemonEntity> {
       return this.datasource.findById(id);
    }
    updateById(updatePokemonDto: UpdatePokemonDto): Promise<PokemonEntity> {
        return this.datasource.updateById(updatePokemonDto);
    }
    deleteById(id: number): Promise<PokemonEntity> {
        return this.datasource.deleteById(id);
    }
}