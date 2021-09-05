import { Component, OnInit } from '@angular/core';
// Model
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',                   // <app-stock-item>
  templateUrl: './stock-item.component.html',   // Template
  styleUrls: ['./stock-item.component.scss']    // Styling
})

export class StockItemComponent implements OnInit {

  public stock: Stock;
  public stockClasses: any;

  constructor() {

    this.stock = new Stock('Test Stock Comp', 'TSC', 92, 104);
    let diff = (this.stock.price / this.stock.previousPrice) - 1;
    let largeChange = Math.abs(diff) > 0.01;
    this.stockClasses = {
      "color": this.stock.isPositiveChange() ? "green" : "red",
      "font-size": largeChange ? "1.2em" : "0.8em",
    };

  }

  toggleFavorite(event:any) {
    console.log('We are togling fav.', event);
    this.stock.favorite = !this.stock.favorite;
  }

  ngOnInit(): void {
    console.log("OnNG-INIT")
  }


}
