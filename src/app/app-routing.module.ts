import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FrontPageComponent} from "./front-page/front-page.component";
import {ContactPageComponent} from "./contact-page/contact-page.component";

const routes: Routes = [
  { path: '', component: FrontPageComponent},
  { path: 'kontakt', component: ContactPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
