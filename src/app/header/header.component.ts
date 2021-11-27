import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/user.model';
import { AutenticacaoService } from './../services/autenticacao.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public usuario: Usuario = new Usuario();
  constructor(private authServices: AutenticacaoService) { }

  ngOnInit(): void {
    this.usuario = this.authServices.getUserAtual();
    console.log(this.usuario);
  }

}
