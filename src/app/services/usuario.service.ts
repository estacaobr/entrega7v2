import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../model/user.model';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  public getAuthUser(usuario: Usuario): Observable<Usuario[]>{
    return this.http.get<Usuario[]>('http://localhost:3000/usuarios?email='
                          +usuario.email+'&senha='+usuario.senha);
  }


  public add(usuario: Usuario): Observable<Usuario> {
    
    const produtoJSON = JSON.stringify(usuario);

    return this.http.post<Usuario>('http://localhost:3000/usuarios', produtoJSON, httpOptions);
    
}
}
