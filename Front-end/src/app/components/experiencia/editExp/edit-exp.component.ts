import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent implements OnInit {

  experiencia : Experiencia = new Experiencia('','','');
  cargando = false;

  constructor(private experienciaService : ExperienciaService, private actRoute : ActivatedRoute, private router : Router,private storageService:StorageService) { }

  ngOnInit(): void {
    const id = this.actRoute.snapshot.params['id']; 
    this.experienciaService.getExp(id).subscribe(data=>{
      this.experiencia = data;
    },
    err=>{
      alert('Error al editar experiencia');
        this.router.navigate(['']);
    })
  }

  onUpdate(): void {
    const id = this.actRoute.snapshot.params['id'];

    this.experienciaService.update(id, this.experiencia).subscribe(
      data=>{
        alert('Experiencia editada correctamente')
        this.router.navigate(['']);
        },
      err=>{
        alert('Error al editar experiencia');
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
          if(urlImagen)this.experiencia.imgExp = urlImagen;
          this.cargando = false;
        });
    };
  }

}
