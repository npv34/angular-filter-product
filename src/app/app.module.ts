import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StartComponent } from './shared/start/start.component';
import { InputFilterComponent } from './shared/input-filter/input-filter.component';
import { MenuComponent } from './core/menu/menu.component';
import { ProductAddComponent } from './products/product-add/product-add.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StartComponent,
    InputFilterComponent,
    MenuComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
