import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { UsuarioService } from 'src/app/services/usuario.service';

import { Usuario } from 'src/app/model/user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})


export class SignInComponent implements OnInit {

  public usuario: Usuario = new Usuario();

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private usuarioService: UsuarioService,
              private rota: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
    nome: ['', Validators.compose([Validators.required,
                                   Validators.minLength(3),
                                   Validators.maxLength(35)])],

    email: ['', Validators.compose([Validators.required,
                                   Validators.email,
                                   Validators.minLength(8),
                                   Validators.minLength(40)])],

    senha: ['', Validators.compose([Validators.required,
                                    Validators.minLength(6)])],

    idade: ['0', Validators.compose([Validators.required,
                                    Validators.min(0),
                                    Validators.minLength(2),
                                    Validators.maxLength(2),])],

    pais: ['', Validators.compose([Validators.required,
                                   Validators.minLength(4),
                                  Validators.maxLength(16)])],

    rua: ['', Validators.compose([Validators.required,
                                  Validators.minLength(4),
                                  Validators.maxLength(100)])]
    });
  }

  public submit() {
let teste = this.form.value;
console.log(teste);
    if (this.form.value) {
      this.usuario.nome = this.form.value.nome;
      this.usuario.email = this.form.value.email;
      this.usuario.senha = this.form.value.senha;
      this.usuario.idade = this.form.value.idade;
      this.usuario.endereco.pais = this.form.value.pais;
      this.usuario.endereco.rua = this.form.value.rua;
      this.usuarioService.add(this.usuario).subscribe((response)=>{
          console.log(response);
          this.rota.navigate(['/itempage']);
      });

    } else {
      alert('Campo novo está vazio!');
    }

  }

}

