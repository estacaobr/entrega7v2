import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from './../services/autenticacao.service';
import { Usuario } from './../model/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public usuario: Usuario = new Usuario();
  constructor(private authServices: AutenticacaoService) { }

  ngOnInit(): void {
    this.usuario = this.authServices.getUserAtual();
    console.log(this.usuario);
  }

}
