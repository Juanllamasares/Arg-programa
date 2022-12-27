import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/models/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  tituloSkill : string = '';
  porcentaje : number = 0;
  imgSkill : string = '../../../assets/img/no-image.png';

  cargando = false;

  constructor(private habilidadService : HabilidadService, private router : Router, private storageService : StorageService) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Habilidad(this.tituloSkill,this.porcentaje,this.imgSkill);
    this.habilidadService.save(skill).subscribe(data =>{
      alert("Habilidad agregada correctamente!")
      this.router.navigate(['']);
    },err=>{
      alert("Falló la operación.")
      this.router.navigate(['']);
    })
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
          if(urlImagen)this.imgSkill = urlImagen;
          this.cargando = false
        });
    };
  }

}
