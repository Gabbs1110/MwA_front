import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from'@angular/forms';

//rotas
import { AppRouting } from './app.routing';

//Root
import { AppComponent } from './app.component';


//shared
import { HeadbarComponent } from './Components/Shared/headbar/headbar.component';
import { SubMenuComponent } from './Components/Shared/sub-menu/sub-menu.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';

//components
import { ProductListaComponent } from './Components/product-lista/product-lista.component';

//pages
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { SignupPageComponent } from './Pages/signup-page/signup-page.component';
import { CartPageComponent } from './Pages/cart-page/cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadbarComponent,
    SubMenuComponent,
    ProductListaComponent,
    FooterComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
