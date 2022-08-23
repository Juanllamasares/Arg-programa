import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL = 'https://portfolio-juan-llamasares.herokuapp.com/educacion/';

  constructor(private http : HttpClient) { }

  public list() : Observable <Educacion[]>{
    return this.http.get<Educacion[]>(this.URL + 'list');
  }

  public getEdu(id : number) : Observable <Educacion>{
    return this.http.get<Educacion>(this.URL + `getEdu/${id}`)
  }

  public save(educacion : Educacion) : Observable <any>{
    return this.http.post<any>(this.URL + 'create', educacion)
  }

  public update(id : number, educacion : Educacion) : Observable <any>{
    return this.http.put<any>(this.URL + `edit/${id}`, educacion)
  }

  public delete(id : number) : Observable <any>{
    return this.http.delete<any>(this.URL + `delete/${id}`)
  }
}
