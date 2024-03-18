export class PokemonEntity {
    constructor(
        public id:number,
        public nombre:string,
        public imagenUrl:string
    ){}
    public static fromObject( object: {[key:string]:any})
    {
        const {id,nombre, 
            imagenurl} = object;

        if(!id) throw 'id is required';
        if(!nombre) throw 'nombre is required';
        if(!imagenurl) throw 'imagen_url is required';


        return new PokemonEntity(id,nombre,
            imagenurl)
    }
}