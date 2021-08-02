import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductService} from "../product.service";
import {Product} from "../product";

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  public productIdFromRoute: number | undefined;
  public product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) { }

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    this.productIdFromRoute = Number(routeParams.get('productId'));
    this.getProduct(this.productIdFromRoute);
  }

  getProduct(productId: number){
    this.productService.getProductById(productId)
      .subscribe(product => this.product = product);
  }

}
