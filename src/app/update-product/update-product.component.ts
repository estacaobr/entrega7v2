import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ItensService } from '../services/itens.service';
import { Produto } from '../model/produto.model';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  public produto!: Produto;

  constructor(private itensService: ItensService,
              private rotaAtiva: ActivatedRoute,
              private rota: Router) { }

  ngOnInit(): void {
    const codigo: number = Number(this.rotaAtiva.snapshot.paramMap.get('id'));

    this.itensService.get(codigo).subscribe((produto: Produto)=>{
        this.produto = produto;
    })
  }

  public atualizar() {
    if (this.produto.id) {
      if(this.produto.tipo == 'Livro'){
        this.itensService.update(this.produto).subscribe((response)=>{
          console.log(response);
          this.rota.navigate(['/itempage']);
        });
      }else if(this.produto.tipo == 'Jogo'){
        this.itensService.update(this.produto).subscribe((response)=>{
          console.log(response);
          this.rota.navigate(['/gamepage']);
        });
      } else {
          alert('Verifique se todos os campos estão preenchido!');
        }
    }
  }
  public deletar() {
    if(this.produto.tipo == 'Livro'){
    if (this.produto.id || this.produto.id === 0) {
      this.itensService.delete(this.produto.id).subscribe((response)=>{
        this.rota.navigate(['/itempage']);
      });
    }
    }if(this.produto.tipo == 'Jogo'){
      if (this.produto.id || this.produto.id === 0) {
        this.itensService.delete(this.produto.id).subscribe((response)=>{
          this.rota.navigate(['/gamepage']);
        });
      }
    }

  }

}
