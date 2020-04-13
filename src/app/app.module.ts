import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { productsListComponent } from './products-list.component';
import { productsDepartmenteComponent } from './product-department.component';
import { productsImageComponent } from './product-image.component';
import { productsPriceComponent } from './product-price.component';
import { productsRowComponent } from './product-row.component';

@NgModule({
  declarations: [
    AppComponent,
    productsListComponent,
    productsDepartmenteComponent,
    productsImageComponent,
    productsPriceComponent,
    productsRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
