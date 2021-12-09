import { Component, OnInit } from '@angular/core';

import { Produto } from './../model/produto.model';
import { ItensService } from './../services/itens.service'

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  public produtosLista: Array<Produto> = [];
  public produto: Produto = new Produto();

  constructor(private ItensService: ItensService) { }

  ngOnInit(): void {
    this.ItensService.getAll().subscribe( (produtos: Produto[])=> {
      this.produtosLista = produtos.filter((produtosJogos) => {
        return produtosJogos.tipo == "Jogo";
      });
      
    });
     
  }

  public mensagem(){
    this.ItensService.teste();
  }
}
