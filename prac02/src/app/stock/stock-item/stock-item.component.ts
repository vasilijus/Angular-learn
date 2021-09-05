import { Component, OnInit, Input } from '@angular/core';
// Model
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',                   // <app-stock-item>
  templateUrl: './stock-item.component.html',   // Template
  template: ``,
  styleUrls: ['./stock-item.component.scss']    // Styling
})

export class StockItemComponent implements OnInit {

  public stocks: Array<Stock>;
  public stockClasses: any;
  // @Input() public stock: Stock;

  constructor() {

    this.stocks = [
      new Stock('Test Stock Comp', 'TSC', 92, 104),
      new Stock('Test Apple Farm', 'TAF', 12, 11),
      new Stock('Test Metal Sheets', 'TMS', 52, 74),
      new Stock('Test Metal Sheets', 'TMS', 52, 41),

    ];

  }

  toggleFavorite(event:any, index:number) {
    console.log('We are togling fav.', event, index);
    this.stocks[index].favorite = !this.stocks[index].favorite;
  }

  trackStockByCode(index: any, stock: Stock) {
    return stock.code;
  }
  ngOnInit(): void {
  }


}
