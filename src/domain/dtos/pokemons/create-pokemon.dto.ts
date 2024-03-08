export class CreatePokemonDto{

    private constructor(
        public readonly nombre:string,
    ){}

    static create( props: {[key:string]:any}): [string?, CreatePokemonDto?]{

        const { nombre } = props;

        if( !nombre ) return ['nombre property is required', undefined];


        return [undefined,new CreatePokemonDto(nombre)];
    }

}