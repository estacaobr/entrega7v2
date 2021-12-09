import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/user.model';
import { AutenticacaoService } from './../services/autenticacao.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public srcLogoImage = "./../../assets/img/prateleira.png";
  public srcLogoImage1 = "./../../assets/img/design.png";
  public usuario: Usuario = new Usuario();


  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private auth: AutenticacaoService, private rota: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required,
                                      Validators.email,
                                      Validators.minLength(8),
                                      Validators.maxLength(40)])],

      senha:  ['', Validators.compose([Validators.required,
                                       Validators.minLength(3)])],
    })

  }

  public realizarLogin(){

    if (this.form.value) {
      this.usuario.email = this.form.value.email;
      this.usuario.senha = this.form.value.senha;
    }

    let user = this.form.value;
console.log(this.form.value);

  this.auth.logar(user);

  this.rota.navigate(['/home']);

  }


}
