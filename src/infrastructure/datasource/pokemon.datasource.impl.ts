import { prisma } from "../../data/postgres";
import { CreatePokemonDto, PokemonDataSource, PokemonEntity, UpdatePokemonDto } from "../../domain";

export class PokemonDataSourceImpl implements PokemonDataSource{
    
    
    async create(createPokemonDto: CreatePokemonDto): Promise<PokemonEntity> {    
        
       
        const pokemon = prisma.pokemon.create({
            data:createPokemonDto!
        });

        return PokemonEntity.fromObject(pokemon);
    }
    async getAll(): Promise<PokemonEntity[]> {
        
        const pokemons = await prisma.pokemon.findMany();
        //Tenemos que hacer el mapeo

        return pokemons.map(pokemon=>PokemonEntity.fromObject(pokemon));
    }
    async findById(id: number): Promise<PokemonEntity> {
        const pokemon = await prisma.pokemon.findFirst({
            where:{ id }
        });

        if( !pokemon) throw `Pokemon with id ${ id } not found`;

        //El fromObject no es mePokemon del mismo nodejs 
        //Se creo en
        return PokemonEntity.fromObject(pokemon);
    }
    
    async updateById(updatePokemonDto: UpdatePokemonDto): Promise<PokemonEntity> {
        const Pokemon = await this.findById( updatePokemonDto.id);
        const updatedPokemon = await prisma.pokemon.update({
            where: {id: updatePokemonDto.id},
            data: updatePokemonDto!.values
        });

        return PokemonEntity.fromObject((updatePokemonDto));
    }
    
    async deleteById(id: number): Promise<PokemonEntity> {
        await this.findById(id);
        
        const deleted = await prisma.pokemon.delete({
            where:{id}
        });
        return PokemonEntity.fromObject(deleted);
    }
    
}