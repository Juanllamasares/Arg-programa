import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  persona : Persona = new Persona("","","","","");

  constructor(private personaService : PersonaService, private tokenService : TokenService) { }

  isLogged = false;

  

  ngOnInit(): void {

    this.cargarPersona();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarPersona() : void{
    this.personaService.getPersona().subscribe(data => {this.persona = data});
  }

}