import { Component, OnInit } from '@angular/core';
import {IProduct} from '../IProduct';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product Manager';
  keywordFilter = '';
  widthImage = 100;
  message: string;
  products: IProduct[] = [];
  filteredProduct: IProduct[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.products = this.productService.getAll();
    this.filteredProduct = this.products;
  }

  getFilter() {
    return this.keywordFilter;
  }
  setFilter(value: string) {
    this.keywordFilter = value;
    this.filteredProduct = this.keywordFilter ? this.filter(this.keywordFilter) : this.products;
  }

  filter(filterBy: string): IProduct[] {
    console.log(filterBy);
    return this.products.filter((product: IProduct) =>
    product.name.indexOf(filterBy) !== -1
    );
  }
  onRatingClicked(message: string) {
    this.message = message;
  }
}
