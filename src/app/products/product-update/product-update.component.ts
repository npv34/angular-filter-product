import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IProduct} from '../IProduct';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  pageTitle = 'Update product';
  updateProductForm: FormGroup;
  indexProduct = +this.route.snapshot.paramMap.get('id');

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) { }

  ngOnInit() {
    const product = this.productService.findById(this.indexProduct);
    this.updateProductForm = this.fb.group({
      name: [product.name, [Validators.required, Validators.minLength(4)]],
      price: [product.price, Validators.required],
      desc: [product.desc, Validators.required],
      active: [product.active, Validators.required]
    });
  }

  submit() {
    console.log(this.updateProductForm.value);
    this.productService.update(this.updateProductForm.value, this.indexProduct);
    this.router.navigate(['/products']);
  }
}
