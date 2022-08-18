export class Educacion {
    idEdu : number;
    tituloEdu : string;
    descripcionEdu : string;
    imgEdu : string;

    constructor(tituloEdu : string, descripcionEdu : string, imgEdu : string){
        this.tituloEdu = tituloEdu;
        this.descripcionEdu = descripcionEdu;
        this.imgEdu = imgEdu;
    }
}
