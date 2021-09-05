import { Component, SimpleChanges, OnInit,
  OnChanges, OnDestroy, DoCheck, AfterViewChecked,
  AfterViewInit, AfterContentChecked,
  AfterContentInit, Input,
  Output, EventEmitter } from '@angular/core';

import { Stock } from '../model/stock';

@Component({
  selector: 'app-product-item-component',
  templateUrl: './product-item-component.component.html',
  styleUrls: ['./product-item-component.component.scss']
})
export class ProductItemComponentComponent implements OnInit {

  // public stock!: Stock;
  @Input() public stock!: Stock;
  @Output() private toggleFavorite: EventEmitter<Stock>;

  constructor() {
    this.toggleFavorite = new EventEmitter<Stock>();
  }


  ngOnInit(): void {
    // this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);
  }

}
