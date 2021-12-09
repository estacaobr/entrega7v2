import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ItensService } from '../services/itens.service';
import { Produto } from '../model/produto.model';

@Component({
  selector: 'app-productdescription',
  templateUrl: './productdescription.component.html',
  styleUrls: ['./productdescription.component.css']
})
export class ProductdescriptionComponent implements OnInit {
  public produto!: Produto;
  public produtosLista: Array<Produto> = [];

  constructor(private itensService: ItensService,
              private rotaAtiva: ActivatedRoute,
              private rota: Router) { }

  ngOnInit(): void {
    const codigo: number = Number(this.rotaAtiva.snapshot.paramMap.get('id'));

    this.itensService.get(codigo).subscribe((produto: Produto)=>{
        this.produto = produto;
    })

    this.itensService.getAll().subscribe( (produtos: Produto[])=> {
      this.produtosLista = produtos;
      
    });
  }

  public comprar(){
    alert("COmrpa efetuada com sucesso!");
    this.itensService.delete(this.produto.id).subscribe((response)=>{
      this.rota.navigate(['/itempage']);
    });
  }

}
