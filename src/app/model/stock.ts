export class Stock {
  favorite: boolean = true;

  constructor(public name: string,
              public code: string,
              public price: number,
              public previousPrice: number) {}

  isPositiveChange(): boolean {
    return this.price >= this.previousPrice;
  }
}
