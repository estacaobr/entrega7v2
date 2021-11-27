import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ItensService } from 'src/app/services/itens.service';

import { Produto } from 'src/app/model/produto.model';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  
  public produto: Produto = new Produto();

  constructor(private itensService: ItensService, private rota: Router) { }

  ngOnInit(): void {
  }
  public cadastrar() {

    if (this.produto.nome) {
      this.itensService.add(this.produto).subscribe((response)=>{
          console.log(response);
          this.rota.navigate(['/itempage']);
      });
      
    } else {
      alert('Campo novo está vazio!');
    }

  }
}
