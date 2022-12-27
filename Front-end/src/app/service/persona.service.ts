import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = environment.url;

  constructor(private http : HttpClient) { }

  public getPersona() : Observable <Persona>{
    return this.http.get<Persona>(this.URL + `/persona/get/1`)
  }

  public updatePersona(id : number, persona : Persona) : Observable <any>{
    return this.http.put<any>(this.URL + `/persona/edit/${id}`, persona);
  }
}
