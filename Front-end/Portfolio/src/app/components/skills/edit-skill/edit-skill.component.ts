import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/models/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  habilidad : Habilidad = null;

  constructor(private habilidadService : HabilidadService, private actRoute : ActivatedRoute, private router : Router,private storageService:StorageService) { }

  ngOnInit(): void {
    const id = this.actRoute.snapshot.params['id'];
    this.habilidadService.getSkill(id).subscribe(data=>{
      this.habilidad = data;
    },
    err=>{
      alert('Error al editar experiencia');
        this.router.navigate(['']);
    })
  }

  onUpdate(): void {
    const id = this.actRoute.snapshot.params['id'];

    this.habilidadService.update(id, this.habilidad).subscribe(
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

    reader.readAsDataURL(imgFile[0]);
    reader.onloadend = () => {
      //console.log(reader.result);
      this.storageService
        .subirImagen(nombreImg + '_' + Date.now(), reader.result)
        .then((urlImagen) => {
          console.log(urlImagen);
          this.habilidad.imgSkill = urlImagen;
        });
    };
  }

}
