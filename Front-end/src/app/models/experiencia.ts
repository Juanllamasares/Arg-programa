export class Experiencia {
    idExp? : number;
    tituloExp : string;
    descripcionExp : string;
    imgExp : string;

    constructor(tituloExp : string, descripcionExp:string, imgExp:string){
        this.tituloExp = tituloExp;
        this.descripcionExp = descripcionExp;
        this.imgExp = imgExp;
    }
}
