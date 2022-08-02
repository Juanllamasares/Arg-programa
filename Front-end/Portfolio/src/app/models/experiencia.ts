export class Experiencia {
    id? : number;
    tituloExp : string;
    descripcionExp : string;

    constructor(tituloExp : string, descripcionExp:string){
        this.tituloExp = tituloExp;
        this.descripcionExp = descripcionExp;
    }
}
