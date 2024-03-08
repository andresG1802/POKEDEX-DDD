export class PokemonEntity {
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
    public static fromObject( object: {[key:string]:any})
    {
        const {id,nombre, tipo_primario,
            tipo_secundario,descripcion,
            altura,peso,habilidades_especiales,
            evoluciones,hp,ataque,defensa,velocidad,
            imagen_url} = object;

        if(!id) throw 'id is required';
        if(!nombre) throw 'nombre is required';
        if(!tipo_primario) throw 'tipo_primario is required';
        if(!tipo_secundario) throw 'tipo_secundario is required';
        if(!descripcion) throw 'descripcion is required';
        if(!altura) throw 'altura is required';
        if(!peso) throw 'peso is required';
        if(!habilidades_especiales) throw 'habilidades_especiales is required';
        if(!evoluciones) throw 'evoluciones is required';
        if(!hp) throw 'hp is required';
        if(!ataque) throw 'ataque is required';
        if(!defensa) throw 'velocidad is required';
        if(!velocidad) throw 'velocidad is required';
        if(!imagen_url) throw 'imagen_url is required';


        return new PokemonEntity(id,nombre,tipo_primario
            ,tipo_secundario,descripcion,
            altura,peso,habilidades_especiales,
            evoluciones,hp,ataque,defensa,velocidad,
            imagen_url)
    }
}