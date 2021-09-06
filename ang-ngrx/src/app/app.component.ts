import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang-ngrx';
  counter: number = 0;
  updatedAt?: number;

  increase() {
    this.updatedAt = Date.now();
    this.counter += 1;
  }
  decrease() {
    this.updatedAt = Date.now();
    this.counter -= 1;
  }
  reset() {
    this.updatedAt = Date.now();
    this.counter = 0;
  }
}
