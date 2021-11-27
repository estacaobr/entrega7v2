import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/user.model';
import { AutenticacaoService } from './../services/autenticacao.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public srcLogoImage = "./../../assets/img/prateleira.png";
  public usuario: Usuario = new Usuario();

  constructor(private auth: AutenticacaoService) { }
  
  ngOnInit(): void {
  }

  public realizarLogin(){
    this.auth.logar(this.usuario);
  }

}
