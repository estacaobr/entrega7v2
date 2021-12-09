import { Injectable } from '@angular/core';
import { Router,
         ActivatedRouteSnapshot,
         CanActivateChild,
         RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacaoService } from './../services/autenticacao.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivateChild{

  constructor(private router: Router, private auth: AutenticacaoService) { }

  public canActivateChild(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    if(this.auth.isAutenticado()){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
