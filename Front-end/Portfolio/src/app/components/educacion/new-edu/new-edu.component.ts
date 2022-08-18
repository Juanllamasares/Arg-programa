import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-new-edu',
  templateUrl: './new-edu.component.html',
  styleUrls: ['./new-edu.component.css']
})
export class NewEduComponent implements OnInit {

  tituloEdu : string = '';
  descripcionEdu : string = '';
  imgEdu : string = '../../../assets/img/no-image.png';

  constructor(private educacionService : EducacionService, private router : Router, private storageService : StorageService) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const edu = new Educacion(this.tituloEdu,this.descripcionEdu,this.imgEdu);
    this.educacionService.save(edu).subscribe(data =>{
      alert("Educación agregada correctamente!")
      this.router.navigate(['']);
    },err=>{
      alert("Falló la operación.")
      this.router.navigate(['']);
    })
  }

  cargarImagen(event: any) {
    //console.log(event.target.files);
    let btn = document.querySelector("button");
    btn.disabled = true;
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
          this.imgEdu = urlImagen;
          btn.disabled = false;
        });
    };
  }

}
