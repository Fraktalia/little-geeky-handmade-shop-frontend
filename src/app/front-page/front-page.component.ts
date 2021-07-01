import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  products: Product[] = [];
  images = [
    {path: 'assets/images/picture_3.png'},
    {path: 'assets/images/picture_4.png'}
  ]

  constructor(private productService:
  ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void{
    this.productService.getProducts()
      .subscribe(downloadedProducts => this.products = downloadedProducts);
  }

}
