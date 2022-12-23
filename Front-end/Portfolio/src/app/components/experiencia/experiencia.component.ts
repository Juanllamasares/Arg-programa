import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias : Experiencia[] = [];

  constructor(private experienciaService : ExperienciaService, private tokenService : TokenService) { }

  isLogged = false;

  

  ngOnInit(): void {

    this.cargarExp();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarExp() : void{
    this.experienciaService.list().subscribe(data => {this.experiencias = data});
  }

  deleteExp(id? : number){
    if(id != undefined){
      this.experienciaService.delete(id).subscribe(data=>{this.cargarExp()},err=>{alert('No se pudo eliminar la Experiencia')})
    }
  }

}
