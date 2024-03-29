import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../models/jwt-dto';
import { LoginUsuario } from '../models/login-usuario';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = environment.url;

  constructor(private httpClient:HttpClient) { }

  public nuevoUsuario(nuevoUsuario : NuevoUsuario):Observable<any>{
    return this.httpClient.post<any>(this.authUrl + `/auth/nuevo`, nuevoUsuario)
  }

  public login(loginUsuario:LoginUsuario):Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authUrl + '/auth/login',loginUsuario)
  }
}
