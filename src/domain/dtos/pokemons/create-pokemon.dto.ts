export class CreatePokemonDto{

    private constructor(
        public readonly nombre:string,
        public readonly tipoPrimario:string,
        public readonly tipoSecundario:string,
        public readonly descripcion:string,
        public readonly altura:number,
        public readonly peso:number,
        public readonly habilidadesEspeciales:string,
        public readonly evoluciones:string,
        public readonly hp:number,
        public readonly ataque:number,
        public readonly defensa:number,
        public readonly velocidad:number,
        public readonly imagenUrl:string
    ){}

    static create( props: {[key:string]:any}): [string?, CreatePokemonDto?]{

        const {nombre, tipoPrimario,
            tipoSecundario,descripcion,
            altura,peso,habilidadesEspeciales,
            evoluciones,hp,ataque,defensa,velocidad,
            imagenUrl} = props;

        if( !nombre ) return ['nombre property is required', undefined];


        return [undefined,new CreatePokemonDto(nombre,tipoPrimario,
            tipoSecundario,descripcion,
            altura,peso,habilidadesEspeciales,
            evoluciones,hp,ataque,defensa,velocidad,
            imagenUrl)];
    }

}