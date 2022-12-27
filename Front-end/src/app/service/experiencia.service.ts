import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  URL = environment.url;

  constructor(private http : HttpClient) { }

  public list() : Observable <Experiencia[]>{
    return this.http.get<Experiencia[]>(this.URL + '/exp/list');
  }

  public getExp(id : number) : Observable <Experiencia>{
    return this.http.get<Experiencia>(this.URL + `/exp/getExp/${id}`)
  }

  public save(experiencia : Experiencia) : Observable<any>{
    return this.http.post<any>(this.URL + `/exp/create`, experiencia)
  }

  public update(id : number, experiencia : Experiencia) : Observable<any>{
    return this.http.put<any>(this.URL + `/exp/edit/${id}`, experiencia);
  }

  public delete(id : number) : Observable<any>{
    return this.http.delete<any>(this.URL + `/exp/delete/${id}`);
  }
}
