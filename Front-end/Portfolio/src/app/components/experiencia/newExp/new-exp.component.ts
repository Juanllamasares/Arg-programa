import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-new-exp',
  templateUrl: './new-exp.component.html',
  styleUrls: ['./new-exp.component.css']
})
export class NewExpComponent implements OnInit {

  tituloExp : string = '';
  descripcionExp : string = '';
  imgExp : string = '../../../assets/img/no-image.png';

  constructor(private experienciaService : ExperienciaService, private router : Router, private storageService : StorageService) { }

  cargando = false;

  ngOnInit(): void {
  }

  onCreate(): void{
    const exp = new Experiencia(this.tituloExp,this.descripcionExp,this.imgExp);
    this.experienciaService.save(exp).subscribe(data =>{
      alert("Experiencia agregada correctamente!")
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
          console.log(urlImagen);
          this.imgExp = urlImagen;
          this.cargando = false;
        });
    };
  }

}
