import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL = environment.url;

  constructor(private http : HttpClient) { }

  public list() : Observable <Educacion[]>{
    return this.http.get<Educacion[]>(this.URL + '/educacion/list');
  }

  public getEdu(id : number) : Observable <Educacion>{
    return this.http.get<Educacion>(this.URL + `/educacion/getEdu/${id}`)
  }

  public save(educacion : Educacion) : Observable <any>{
    return this.http.post<any>(this.URL + '/educacion/create', educacion)
  }

  public update(id : number, educacion : Educacion) : Observable <any>{
    return this.http.put<any>(this.URL + `/educacion/edit/${id}`, educacion)
  }

  public delete(id : number) : Observable <any>{
    return this.http.delete<any>(this.URL + `/educacion/delete/${id}`)
  }
}
