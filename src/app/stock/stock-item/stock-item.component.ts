import { Component, OnInit } from '@angular/core';
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
      'positive': this.stock.isPositiveChange(),
      'negative':!this.stock.isPositiveChange(),
      'large-change': largeChange,
      'small-change':!largeChange
    };
  }

  toggleFavorite(e:any) {
    console.log('We are togling fav.',e);
    this.stock.favorite = !this.stock.favorite;
  }

  ngOnInit(): void {
  }

}
