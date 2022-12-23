import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  URL ='http://localhost:8080/proyects/'

  constructor(private http : HttpClient) { }

  public getList() : Observable <Proyecto[]>{
    return this.http.get<Proyecto[]>(this.URL + 'list')
  }

  public getProyect(id : number) : Observable <Proyecto>{
    return this.http.get<Proyecto>(this.URL + `getProyect/${id}`)
  }

  public save(proyect : Proyecto) : Observable<any>{
    return this.http.post<any>(this.URL + `create`, proyect)
  }

  public update(id : number, proyect : Proyecto) : Observable<any>{
    return this.http.put<any>(this.URL + `edit/${id}`, proyect);
  }

  public delete(id : number) : Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }
}
