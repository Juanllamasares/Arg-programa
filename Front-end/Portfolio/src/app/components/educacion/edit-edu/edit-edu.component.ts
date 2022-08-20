import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-edit-edu',
  templateUrl: './edit-edu.component.html',
  styleUrls: ['./edit-edu.component.css']
})
export class EditEduComponent implements OnInit {

  educacion : Educacion = null;
  cargando = false;

  constructor(private educacionService : EducacionService, private actRouter : ActivatedRoute, private router : Router, private storageService : StorageService) { }

  ngOnInit(): void {
    const id = this.actRouter.snapshot.params['id'];
    this.educacionService.getEdu(id).subscribe(data=>{
      this.educacion = data;
    },
    err=>{
      alert('Error al editar educacion');
        this.router.navigate(['']);
    })
  }

  onUpdate(): void {
    const id = this.actRouter.snapshot.params['id'];

    this.educacionService.update(id, this.educacion).subscribe(
      data=>{
        alert('Educación editada correctamente')
        this.router.navigate(['']);
        },
      err=>{
        alert('Error al editar educacion');
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
          console.log(urlImagen);
          this.educacion.imgEdu = urlImagen;
          this.cargando = false;
        });
    };
  }

}
