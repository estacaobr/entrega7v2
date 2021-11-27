import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/user.model';

import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private authUser: boolean = false;
  private userAtual: Usuario = new Usuario();
  constructor(private router: Router, private usuarioService: UsuarioService) { }

  public logar(usuario: Usuario) {
    
    this.usuarioService.getAuthUser(usuario).subscribe((usuarioAuth: Usuario[])=>{
      const [user] = usuarioAuth;
      if(user.id){
        [this.userAtual] = usuarioAuth;
        this.authUser = true;
        this.router.navigate(['/home'])
      }
    });
        
  }
  public getUserAtual(){
    return this.userAtual;
  }

  public isAutenticado(): boolean{
    return this.authUser;
  }
}
