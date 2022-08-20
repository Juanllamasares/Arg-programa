import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos : Proyecto[] = [];

  constructor(private proyectoService : ProyectoService, private tokenService : TokenService) { }

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
    this.proyectoService.getList().subscribe(data => {this.proyectos = data});
  }

  deleteExp(id? : number){
    if(id != undefined){
      this.proyectoService.delete(id).subscribe(data=>{this.cargarExp()},err=>{alert('No se pudo eliminar el Proyecto')})
    }
  }

}
