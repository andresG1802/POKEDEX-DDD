import { Request, Response} from "express";
import { prisma } from "../../data/postgres";
import { CreatePokemonDto, UpdatePokemonDto } from "../../domain/dtos";
import { CreatePokemon, DeletePokemon, GetPokemon, GetPokemons, PokemonRepository, UpdatePokemon } from "../../domain";

export class PokemonsController{

    //* DI
    constructor(
        private readonly pokemonRepository: PokemonRepository,
    ){}
    
    //Lo raro es que express recomienda:
    //no utilizar async 
    public getPokemons = (req:Request,res:Response) => {
        new GetPokemons(this.pokemonRepository)
            .execute()
            .then(pokemons => res.json(pokemons))
            .catch(error => res.status(400).json({error}));
    };
    
    public getPokemonById = (req:Request,res:Response)=>{
        const id = +req.params.id;
        
        new GetPokemon(this.pokemonRepository)
            .execute(id)
            .then(pokemon => res.json(pokemon))
            .catch(error=>res.status(400).json({error}))
        
    }

    public createPokemon = (req:Request, res:Response)=>{
        const [error,createPokemonDto] = CreatePokemonDto.create(req.body);
        if(error) return res.status(400).json({error});

        new CreatePokemon(this.pokemonRepository)
            .execute( createPokemonDto! )
            .then(pokemon => res.json(pokemon))
            .catch(error=> res.status(400).json({error}));        
        
    
    };

    public updatePokemon = (req: Request, res:Response )=>{

        const id= +req.params.id;
        const [error,updatepokemonDto] = UpdatePokemonDto.create({...req.body,id});
        if(error) return res.status(400).json({error});

        new UpdatePokemon(this.pokemonRepository)
            .execute(updatepokemonDto!)
            .then(pokemon=>res.json(pokemon))
            .catch(error=>res.status(400).json({error}));
    };

    public deletePokemon = (req : Request , res:Response)=>{
        
        const id= +req.params.id;
        
        new DeletePokemon(this.pokemonRepository)
            .execute(id)
            .then(pokemon=>res.json(pokemon))
            .catch(error=>res.status(400).json({error}))   
    };
}