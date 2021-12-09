import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItensService } from 'src/app/services/itens.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { Produto } from 'src/app/model/produto.model';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  public produto: Produto = new Produto();

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private itensService: ItensService, private rota: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required,
                                     Validators.minLength(3),
                                     Validators.maxLength(35)])],


      preco: ['0', Validators.compose([Validators.required,
                                       Validators.min(1),
                                       Validators.minLength(2),
                                       Validators.maxLength(50),])],

      descricao: ['0', Validators.compose([Validators.required,
                                           Validators.minLength(15),
                                           Validators.maxLength(600)])]
    })
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
