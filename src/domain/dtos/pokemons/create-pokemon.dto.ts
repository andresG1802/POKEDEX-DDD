export class CreatePokemonDto{

    private constructor(
        public readonly nombre:string,
        public readonly imagenurl:string
    ){}

    static create( props: {[key:string]:any}): [string?, CreatePokemonDto?]{

        const {nombre,
            imagenUrl} = props;

        if( !nombre ) return ['nombre property is required', undefined];


        return [undefined,new CreatePokemonDto(nombre,
            imagenUrl)];
    }

}