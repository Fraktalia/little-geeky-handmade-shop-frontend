import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../product";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-single-product-card',
  templateUrl: './single-product-card.component.html',
  styleUrls: ['./single-product-card.component.css'],
  animations: [
    trigger('onHover', [
      transition(':enter', [
        style({transform: 'translateY(100%)'}),
        animate('300ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({transform: 'translateY(100%)'}))
      ])
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
