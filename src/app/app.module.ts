import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HeaderComponent } from './header/header.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { ProductdescriptionComponent } from './productdescription/productdescription.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { NewProductComponent } from './new-product/new-product.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { GamePageComponent } from './game-page/game-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginPageComponent,
    HeaderComponent,
    ItemPageComponent,
    ConfiguracoesComponent,
    ProductdescriptionComponent,
    UpdateProductComponent,
    NewProductComponent,
    SignInComponent,
    GamePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
