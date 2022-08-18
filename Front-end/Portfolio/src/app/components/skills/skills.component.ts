import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/models/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  habilidad : Habilidad[] = [];

  constructor(private habilidadService : HabilidadService, private tokenService : TokenService) { }

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
    this.habilidadService.getList().subscribe(data => {this.habilidad = data});
  }

  deleteExp(id? : number){
    if(id != undefined){
      this.habilidadService.delete(id).subscribe(data=>{this.cargarExp()},err=>{alert('No se pudo eliminar la Experiencia')})
    }
  }

}
