export class UpdatePokemonDto{
    constructor(
        public id:number,
        public nombre:string,
        public tipo_primario:string,
        public tipo_secundario:string,
        public descripcion:string,
        public altura:number,
        public peso:number,
        public habilidades_especiales:string,
        public evoluciones:string,
        public hp:number,
        public ataque:number,
        public defensa:number,
        public velocidad:number,
        public imagen_url:string
    ){}

    get values(){
        const returnObj:{[key:string]:any}={};
        
        if(this.nombre) returnObj.nombre = this.nombre;
        if(this.tipo_primario) returnObj.tipo_primario = this.tipo_primario;
        if(this.tipo_secundario) returnObj.tipo_secundario = this.tipo_secundario;
        if(this.descripcion) returnObj.descripcion = this.descripcion;
        if(this.altura) returnObj.altura = this.altura;
        if(this.peso) returnObj.peso = this.peso;
        if(this.habilidades_especiales) returnObj.habilidades_especiales = this.habilidades_especiales;
        if(this.evoluciones) returnObj.evoluciones = this.evoluciones;
        if(this.hp) returnObj.hp = this.hp;
        if(this.ataque) returnObj.ataque = this.ataque;
        if(this.defensa) returnObj.defensa = this.defensa;
        if(this.velocidad) returnObj.velocidad = this.velocidad;
        if(this.imagen_url) returnObj.imagen_url = this.imagen_url;
        
        return returnObj;
    }
    static create( props: {[key:string]:any}): [string?, UpdatePokemonDto?]{

        const { id,nombre, tipo_primario,
            tipo_secundario,descripcion,
            altura,peso,habilidades_especiales,
            evoluciones,hp,ataque,defensa,velocidad,
            imagen_url} = props;
        
        if(!id || isNaN(Number(id))){
            return ['id must be a valid number'];
        }

        
        
        return [undefined,new UpdatePokemonDto(id,nombre,tipo_primario
            ,tipo_secundario,descripcion,
            altura,peso,habilidades_especiales,
            evoluciones,hp,ataque,defensa,velocidad,
            imagen_url)];
    }
}