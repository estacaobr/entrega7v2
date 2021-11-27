import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Produto } from './../model/produto.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ItensService {
  
  
  constructor(private http: HttpClient) { }

  public getAll(): Observable<Produto[]>{
    return this.http.get<Produto[]>('http://localhost:3000/produtos');
  }

  public get(id: number): Observable<Produto>{
    return this.http.get<Produto>('http://localhost:3000/produtos/'+id);
  }

  public add(produto: Produto): Observable<any> {
      produto.imagem = './../../assets/img/prateleira.png';

      const produtoJSON = JSON.stringify(produto);

      return this.http.post<Produto>('http://localhost:3000/produtos', produtoJSON, httpOptions);
      
  }

  public update(produto: Produto): Observable<any> {
    const id = produto.id;
    const produtoJSON = JSON.stringify(produto);

    return this.http.put<Produto>('http://localhost:3000/produtos/'+id, produtoJSON, httpOptions);
  }

  public delete(id: number) {
    return this.http.delete<Produto>('http://localhost:3000/produtos/'+id);
  }

  public teste() {
    alert('testeste');
  }
}
