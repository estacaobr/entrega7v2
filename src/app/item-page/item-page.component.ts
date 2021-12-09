import { Component, OnInit } from '@angular/core';

import { Produto } from './../model/produto.model';
import { ItensService } from './../services/itens.service'

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {

  public produtosLista: Array<Produto> = [];

  public produto: Produto = new Produto();


  constructor(private ItensService: ItensService) { }

  ngOnInit(): void {
    this.ItensService.getAll().subscribe( (produtos: Produto[])=> {
      this.produtosLista = produtos.filter((produtosJogos) => {
        return produtosJogos.tipo == "Livro";
      });;
    } );
  }

  public mensagem(){
    this.ItensService.teste();
  }
}
