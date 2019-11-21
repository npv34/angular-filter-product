import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './products/product-list/product-list.component';
import {ProductAddComponent} from './products/product-add/product-add.component';
import {ProductUpdateComponent} from './products/product-update/product-update.component';


const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'products/create', component: ProductAddComponent},
  {path: 'products/:id/edit', component: ProductUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
