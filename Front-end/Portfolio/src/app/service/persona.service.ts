import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = 'https://portfolio-juan-llamasares.herokuapp.com/persona/';

  constructor(private http : HttpClient) { }

  public getPersona() : Observable <Persona>{
    return this.http.get<Persona>(this.URL + `get/1`)
  }

  public updatePersona(id : number, persona : Persona) : Observable <any>{
    return this.http.put<any>(this.URL + `edit/${id}`, persona);
  }
}
