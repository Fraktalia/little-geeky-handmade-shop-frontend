import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { HttpClientModule } from '@angular/common/http';
import {CommonModule} from "@angular/common";
import { NavbarComponent } from './navbar/navbar.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import {IvyCarouselModule} from "angular-responsive-carousel";
import { SingleProductCardComponent } from './single-product-card/single-product-card.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SingleProductComponent } from './single-product/single-product.component';
import { ReactiveFormsModule} from "@angular/forms";
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    NavbarComponent,
    ContactPageComponent,
    SingleProductCardComponent,
    SingleProductComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    IvyCarouselModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
