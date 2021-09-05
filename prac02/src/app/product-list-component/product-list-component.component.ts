import { Component, OnInit } from '@angular/core';

import { Stock } from '../model/stock';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.scss']
})
export class ProductListComponentComponent implements OnInit {

  public list: Array<Stock>;

  constructor() {
    this.list = [
      new Stock('Test Stock Comp', 'TSC', 92, 104),
      new Stock('Test Apple Farm', 'TAF', 12, 11),
      new Stock('Test Metal Sheets', 'TMS', 52, 74),
      new Stock('Test Metal Sheets', 'TMS', 52, 41),

    ];
  }



  ngOnInit(): void {
  }

}
