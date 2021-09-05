import { Component, OnInit } from '@angular/core';
// Model
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',                   // <app-stock-item>
  templateUrl: './stock-item.component.html',   // Template
  styleUrls: ['./stock-item.component.scss']    // Styling
})

export class StockItemComponent implements OnInit {

  public stocks: Array<Stock>;
  public stockClasses: any;

  constructor() {

    this.stocks = [
      new Stock('Test Stock Comp', 'TSC', 92, 104),
      new Stock('Test Apple Farm', 'TAF', 12, 24),
      new Stock('Test Metal Sheets', 'TMS', 52, 74),
      new Stock('Test Metal Sheets', 'TMS', 52, 74),
      new Stock('Test Metal Sheets', 'TMS', 52, 74),
      new Stock('Test Metal Sheets', 'TMS', 52, 74),
      new Stock('Test Metal Sheets', 'TMS', 52, 74),
    ];

    // let diff = (this.stock.price / this.stock.previousPrice) - 1;
    // let largeChange = Math.abs(diff) > 0.01;
    // this.stockClasses = {
    //   "color": this.stock.isPositiveChange() ? "green" : "red",
    //   "font-size": largeChange ? "1.2em" : "0.8em",
    // };

  }

  toggleFavorite(event:any, index:number) {
    console.log('We are togling fav.', event, index);
    this.stocks[index].favorite = !this.stocks[index].favorite;
  }

  ngOnInit(): void {
    console.log("OnNG-INIT")
  }


}
