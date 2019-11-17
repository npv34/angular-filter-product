import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ProductListComponent} from '../product-list/product-list.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  addProductForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: ['', Validators.required],
    desc: ['', Validators.required],
    status: ['', Validators.required]
  });
  pageTitle = 'Add new product';
  constructor(private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
  }

  submit() {
    //
    this.router.navigate(['/products']);
  }

  get name() { return this.addProductForm.get('name'); }
  get price() { return this.addProductForm.get('price'); }
  get desc() { return this.addProductForm.get('desc'); }
  get status() { return this.addProductForm.get('status'); }

}
