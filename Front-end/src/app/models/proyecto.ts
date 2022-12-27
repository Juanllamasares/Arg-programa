export class Proyecto {
    idProy? : number;
    tituloProyect : string;
    urlProyecto : string;
    descripcionProyect : string;
    imgProyect : string;

    constructor(tituloProyect : string, urlProyecto : string, descripcionProyect : string, imgProyect : string){
        this.tituloProyect = tituloProyect;
        this.urlProyecto = urlProyecto;
        this.descripcionProyect = descripcionProyect;
        this.imgProyect = imgProyect;
    }
}
