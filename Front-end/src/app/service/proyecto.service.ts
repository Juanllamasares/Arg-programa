import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  URL = environment.url;

  constructor(private http : HttpClient) { }

  public getList() : Observable <Proyecto[]>{
    return this.http.get<Proyecto[]>(this.URL + '/proyects/list')
  }

  public getProyect(id : number) : Observable <Proyecto>{
    return this.http.get<Proyecto>(this.URL + `/proyects/getProyect/${id}`)
  }

  public save(proyect : Proyecto) : Observable<any>{
    return this.http.post<any>(this.URL + `/proyects/create`, proyect)
  }

  public update(id : number, proyect : Proyecto) : Observable<any>{
    return this.http.put<any>(this.URL + `/proyects/edit/${id}`, proyect);
  }

  public delete(id : number) : Observable<any>{
    return this.http.delete<any>(this.URL + `/proyects/delete/${id}`);
  }
}
