import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/model/user.model';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.css']
})
export class ConfiguracoesComponent implements OnInit {
  public usuario!: Usuario;

  constructor(private usuarioService: UsuarioService,
              private rotaAtiva: ActivatedRoute,
              private rota: Router) { }

  ngOnInit(): void {
    const codigo: number = Number(this.rotaAtiva.snapshot.paramMap.get('id'));

    this.usuarioService.get(codigo).subscribe((usuario: Usuario)=>{
        this.usuario = usuario;
    })
  }
  public atualizar() {
    if (this.usuario.id) {
      this.usuarioService.update(this.usuario).subscribe((response)=>{
        console.log(response);
        this.rota.navigate(['/itempage']);
      });
    }
  }
}


