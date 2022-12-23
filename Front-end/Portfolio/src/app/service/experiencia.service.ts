import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  URL = 'http://localhost:8080/exp/';

  constructor(private http : HttpClient) { }

  public list() : Observable <Experiencia[]>{
    return this.http.get<Experiencia[]>(this.URL + 'list');
  }

  public getExp(id : number) : Observable <Experiencia>{
    return this.http.get<Experiencia>(this.URL + `getExp/${id}`)
  }

  public save(experiencia : Experiencia) : Observable<any>{
    return this.http.post<any>(this.URL + `create`, experiencia)
  }

  public update(id : number, experiencia : Experiencia) : Observable<any>{
    return this.http.put<any>(this.URL + `edit/${id}`, experiencia);
  }

  public delete(id : number) : Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }
}
