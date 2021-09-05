import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stock-market';
  counter = 0;
  updatedAt?: number;
  // isTrue?: boolean = true;

  get cannotDecrease(): boolean {
    return this.counter <= 0;
  }

  increase(): void {
    this.updatedAt = Date.now();
    this.counter += 1;
  }
  decrease(): void { this.counter -= 1; }
  reset(): void   { this.counter = 0; }
}
