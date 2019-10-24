import { Component, OnInit } from '@angular/core';
import {IProduct} from '../IProduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product Manager';
  keywordFilter = '';
  widthImage = 100;
  products: IProduct[] = [
    {id : 1,
      name : 'Laptop dell',
      price: 1000,
      image: 'assets/images/products/may-tinh-bang.jpeg',
      desc: 'aadsadsadas',
      startRating: 4.2
    },
    { id : 2,
      name : 'Laptop asus',
      price: 3000,
      image: 'assets/images/products/may-tinh-bang.jpeg',
      desc: 'aadsadsadas',
      startRating: 3

    },
    { id : 3,
      name : 'Laptop hp',
      price: 2000,
      image: 'assets/images/products/may-tinh-bang.jpeg',
      desc: 'aadsadsadas',
      startRating: 5
    }
  ];
  filteredProduct: IProduct[];

  constructor() {
  }

  ngOnInit() {
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
    this.pageTitle = 'Product List:' + message;
  }
}
