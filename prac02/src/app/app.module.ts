import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { ProductItemComponentComponent } from './product-item-component/product-item-component.component';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';

@NgModule({
  declarations: [
    AppComponent,
    StockItemComponent,
    ProductListComponentComponent,
    ProductItemComponentComponent,
    CreateStockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
