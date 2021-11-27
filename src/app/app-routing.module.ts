import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './auth/auth-guard.service';

import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { ProductdescriptionComponent } from './productdescription/productdescription.component';
import { ItemPageComponent} from './item-page/item-page.component';
import { NewProductComponent } from './new-product/new-product.component';
import { SignInComponent } from './sign-in/sign-in.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'newproduct',
    component: NewProductComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'updateproduct/:id',
    component: UpdateProductComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'configuracoes',
    component: ConfiguracoesComponent
  },
  {
    path: 'productdescription',
    component: ProductdescriptionComponent
  },
  {
    path: 'itempage',
    component: ItemPageComponent
  },
  {
    path: 'signin',
    component: SignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
