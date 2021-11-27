import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

import { Usuario } from 'src/app/model/user.model';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService, private rota: Router) { }

  ngOnInit(): void {
  }

  public cadastrar() {

    if (this.usuario.nome) {
      this.usuarioService.add(this.usuario).subscribe((response)=>{
          console.log(response);
          this.rota.navigate(['/itempage']);
      });
      
    } else {
      alert('Campo novo está vazio!');
    }

  }

}
