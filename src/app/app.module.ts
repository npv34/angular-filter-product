import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import {FormsModule} from '@angular/forms';
import { StartComponent } from './shared/start/start.component';
import { InputFilterComponent } from './shared/input-filter/input-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StartComponent,
    InputFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
