import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../models/habilidad';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  URL = environment.url;

  constructor(private http : HttpClient) { }

  public getList() : Observable <Habilidad[]>{
    return this.http.get<Habilidad[]>(this.URL + '/skills/list')
  }

  public getSkill(id : number) : Observable <Habilidad>{
    return this.http.get<Habilidad>(this.URL + `/skills/getSkill/${id}`)
  }

  public save(habilidad : Habilidad) : Observable<any>{
    return this.http.post<any>(this.URL + `create`, habilidad)
  }

  public update(id : number, habilidad : Habilidad) : Observable<any>{
    return this.http.put<any>(this.URL + `/skills/edit/${id}`, habilidad);
  }

  public delete(id : number) : Observable<any>{
    return this.http.delete<any>(this.URL + `/skills/delete/${id}`);
  }
}
