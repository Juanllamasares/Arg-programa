import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educaciones : Educacion[] = [];

  constructor(private educacionService : EducacionService, private tokenService : TokenService) { }

  isLogged = false;

  

  ngOnInit(): void {

    this.cargarEdu();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarEdu() : void{
    this.educacionService.list().subscribe(data => {this.educaciones = data});
  }

  deleteEdu(id? : number){
    if(id != undefined){
      this.educacionService.delete(id).subscribe(data=>{this.cargarEdu()},err=>{alert('No se pudo eliminar la Educación.')})
    }
  }

}
