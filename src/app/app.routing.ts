import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartPageComponent } from './Pages/cart-page/cart-page.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { SignupPageComponent } from './Pages/signup-page/signup-page.component';



const appRoutes: Routes = [

    { path: '', component: LoginPageComponent },
    { path: 'home', component: HomePageComponent },
    { path: 'signup', component: SignupPageComponent },
    { path: 'cart', component: CartPageComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })

  export class AppRouting { }