import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FrontPageComponent} from "./front-page/front-page.component";
import {ContactPageComponent} from "./contact-page/contact-page.component";
import {SingleProductComponent} from "./single-product/single-product.component";
import {LoginPageComponent} from "./login-page/login-page.component";

const routes: Routes = [
  { path: '', component: FrontPageComponent},
  { path: 'products/:productId', component: SingleProductComponent},
  { path: 'kontakt', component: ContactPageComponent},
  { path: 'login', component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
