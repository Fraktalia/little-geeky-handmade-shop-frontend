import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../product";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-single-product-card',
  templateUrl: './single-product-card.component.html',
  styleUrls: ['./single-product-card.component.css'],
  animations: [
      trigger('openClose', [
        state('open', style({
          opacity: 0.5,
        })),
        state('closed', style({
          opacity: 1,
        })),
        transition('open <=> closed', [
          animate('0.3s')
        ]),
      ])
  ]
})

export class SingleProductCardComponent implements OnInit {
  @Input() product!: Product;
  isHover = false;
  constructor() {
  }

  ngOnInit(): void {
  }

  hoverIn(){
    this.isHover = true;
  };

  hoverOut(){
    this.isHover = false;
  };
}
