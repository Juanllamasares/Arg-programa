export class Proyecto {
    id : number;
    tituloProyect : string;
    descripcionProyect : string;
    imgProyect : string;

    constructor(tituloProyect : string , descripcionProyect : string, imgProyect : string){
        this.tituloProyect = tituloProyect;
        this.descripcionProyect = descripcionProyect;
        this.imgProyect = imgProyect;
    }
}
