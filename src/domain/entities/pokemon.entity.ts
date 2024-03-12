export class PokemonEntity {
    constructor(
        public id:number,
        public nombre:string,
        public tipoPrimario:string,
        public tipoSecundario:string,
        public descripcion:string,
        public altura:number,
        public peso:number,
        public habilidadesEspeciales:string,
        public evoluciones:string,
        public hp:number,
        public ataque:number,
        public defensa:number,
        public velocidad:number,
        public imagenUrl:string
    ){}
    public static fromObject( object: {[key:string]:any})
    {
        const {id,nombre, tipoPrimario,
            tipoSecundario,descripcion,
            altura,peso,habilidadesEspeciales,
            evoluciones,hp,ataque,defensa,velocidad,
            imagenUrl} = object;

        if(!id) throw 'id is required';
        if(!nombre) throw 'nombre is required';
        if(!tipoPrimario) throw 'tipo_primario is required';
        if(!tipoSecundario) throw 'tipo_secundario is required';
        if(!descripcion) throw 'descripcion is required';
        if(!altura) throw 'altura is required';
        if(!peso) throw 'peso is required';
        if(!habilidadesEspeciales) throw 'habilidades_especiales is required';
        if(!evoluciones) throw 'evoluciones is required';
        if(!hp) throw 'hp is required';
        if(!ataque) throw 'ataque is required';
        if(!defensa) throw 'velocidad is required';
        if(!velocidad) throw 'velocidad is required';
        if(!imagenUrl) throw 'imagen_url is required';


        return new PokemonEntity(id,nombre,tipoPrimario
            ,tipoSecundario,descripcion,
            altura,peso,habilidadesEspeciales,
            evoluciones,hp,ataque,defensa,velocidad,
            imagenUrl)
    }
}