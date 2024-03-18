export class UpdatePokemonDto{
    constructor(
        public id:number,
        public nombre:string,
        public imagenurl:string
    ){}

    get values(){
        const returnObj:{[key:string]:any}={};
        
        if(this.nombre) returnObj.nombre = this.nombre;
        if(this.imagenurl) returnObj.imagen_url = this.imagenurl;
        
        return returnObj;
    }
    static create( props: {[key:string]:any}): [string?, UpdatePokemonDto?]{

        const { id,nombre,
            imagenurl} = props;
        
        if(!id || isNaN(Number(id))){
            return ['id must be a valid number'];
        }

        
        
        return [undefined,new UpdatePokemonDto(id,nombre,
            imagenurl)];
    }
}