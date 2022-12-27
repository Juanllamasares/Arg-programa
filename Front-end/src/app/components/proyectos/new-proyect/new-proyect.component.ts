import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { StorageService } from 'src/app/service/storage.service';
import { Proyecto } from 'src/app/models/proyecto';


@Component({
  selector: 'app-new-proyect',
  templateUrl: './new-proyect.component.html',
  styleUrls: ['./new-proyect.component.css']
})
export class NewProyectComponent implements OnInit {

  tituloProyect : string = '';
  urlProyecto : string = '';
  descripcionProyecto : string = '';
  ImgProyect : string = '../../../assets/img/no-image.png';

  constructor(private proyectoService : ProyectoService, private router : Router, private storageService : StorageService) { }

  cargando = false;

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyect = new Proyecto(this.tituloProyect,this.urlProyecto,this.descripcionProyecto,this.ImgProyect);
    this.proyectoService.save(proyect).subscribe(data =>{
      alert("Proyecto agregado correctamente!")
      this.router.navigate(['']);
    },err=>{
      alert("Falló la operación.")
      this.router.navigate(['']);
    })
  }

  cargarImagen(event: any) {
    //console.log(event.target.files);
    this.cargando = true;
    let imgFile = event.target.files;
    let reader = new FileReader();
    let nombreImg = 'img';

    reader.readAsDataURL(imgFile[0]);
    reader.onloadend = () => {
      //console.log(reader.result);
      this.storageService
        .subirImagen(nombreImg + '_' + Date.now(), reader.result)
        .then((urlImagen) => {
          if(urlImagen)this.ImgProyect = urlImagen;
          this.cargando = false;
        });
    };
  }

}
