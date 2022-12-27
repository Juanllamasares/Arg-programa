import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-edit-proyect',
  templateUrl: './edit-proyect.component.html',
  styleUrls: ['./edit-proyect.component.css']
})
export class EditProyectComponent implements OnInit {

  proyecto : Proyecto = new Proyecto('','','','');
  cargando = false;

  constructor(private proyectoService : ProyectoService, private actRoute : ActivatedRoute, private router : Router, private storageService:StorageService) { }

  ngOnInit(): void {
    const id = this.actRoute.snapshot.params['id'];
    this.proyectoService.getProyect(id).subscribe(data=>{
      this.proyecto = data;
    },
    err=>{
      alert('Error al editar experiencia');
        this.router.navigate(['']);
    })
  }

  onUpdate(): void {
    const id = this.actRoute.snapshot.params['id'];

    this.proyectoService.update(id, this.proyecto).subscribe(
      data=>{
        alert('Proyecto editado correctamente')
        this.router.navigate(['']);
        },
      err=>{
        alert('Error al editar el proyecto');
        this.router.navigate(['']);
      }
    )
  }

  cargarImagen(event: any) {
    //console.log(event.target.files);

    let imgFile = event.target.files;
    let reader = new FileReader();
    let nombreImg = 'img';
    this.cargando = true;

    reader.readAsDataURL(imgFile[0]);
    reader.onloadend = () => {
      //console.log(reader.result);
      this.storageService
        .subirImagen(nombreImg + '_' + Date.now(), reader.result)
        .then((urlImagen) => {
          if(urlImagen)this.proyecto.imgProyect = urlImagen;
          this.cargando = false;
        });
    };
  }

}
