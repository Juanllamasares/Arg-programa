export class Habilidad {
    idSkill : number;
    tituloSkill : string;
    porcentaje : number;
    imgSkill : string;

    constructor(tituloSkill : string, porcentaje : number, imgSkill : string){
        this.tituloSkill = tituloSkill;
        this.porcentaje = porcentaje;
        this.imgSkill = imgSkill;
    }
}
