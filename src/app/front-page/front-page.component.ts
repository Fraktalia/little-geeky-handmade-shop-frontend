import { Component, OnInit, NgModule, HostBinding } from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";
import {InstagramService} from "../instagram.service";
import {Instagram} from "../instagram";

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})

export class FrontPageComponent implements OnInit {
  products: Product[] = [];
  instagramProfile: any;
  images = [
    {path: 'assets/images/picture_1.png'},
    {path: 'assets/images/picture_2.png'},
    {path: 'assets/images/picture_3.png'},
    {path: 'assets/images/picture_4.png'}
  ]

  constructor(
    private productService: ProductService,
    private instagramService: InstagramService) { }

  ngOnInit() {
    this.getProducts();
    this.getInstaPhotos();
    console.log(this.instagramProfile);
  }

  getProducts(): void{
    this.productService.getProducts(3)
      .subscribe(downloadedProducts => this.products = downloadedProducts);
  }

  private getInstaPhotos() {
    this.instagramService.getInstagramProfile()
      .subscribe(downloadedProfile => this.instagramProfile = downloadedProfile);
    // TODO use instagramService to get data an log it in console
  }
}
