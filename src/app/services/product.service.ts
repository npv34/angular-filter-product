import { Injectable } from '@angular/core';
import {IProduct} from '../products/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: IProduct[] = [
    {id : 1,
      name : 'Laptop dell',
      price: 1000,
      image: 'assets/images/products/may-tinh-bang.jpeg',
      desc: 'aadsadsadas',
      rating: 2.5,
      active: 1,
    },
    { id : 2,
      name : 'Laptop asus',
      price: 3000,
      image: 'assets/images/products/may-tinh-bang.jpeg',
      desc: 'aadsadsadas',
      rating: 3.5,
      active: 0
    },
    { id : 3,
      name : 'Laptop hp',
      price: 2000,
      image: 'assets/images/products/may-tinh-bang.jpeg',
      desc: 'aadsadsadas',
      rating: 5,
      active: 1
    }
  ];
  constructor() { }
  getAll(): IProduct[] {
    return this.products;
  }
  findById(index): IProduct {
    return this.products[index];
  }

  update(data: IProduct, index: number) {
    const product =  this.findById(index);
    product.name = data.name;
    product.price = data.price;
    product.active = data.active;
    product.desc = data.desc;
    console.log(product);
    this.products[index] = product;
  }
}
