import { Component, OnInit, NgModule, HostBinding } from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [ ],
  bootstrap: [ ]
})

export class FrontPageComponent implements OnInit {
  products: Product[] = [];
  images = [
    {path: 'assets/images/picture_1.png'},
    {path: 'assets/images/picture_2.png'},
    {path: 'assets/images/picture_3.png'},
    {path: 'assets/images/picture_4.png'}
  ]

  constructor(private productService:
  ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void{
    this.productService.getProducts(3)
      .subscribe(downloadedProducts => this.products = downloadedProducts);
  }

}
