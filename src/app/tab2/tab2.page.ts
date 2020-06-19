import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  product: Product = {
    title: '',
    content: '',
    created_at: '',
    updated_at: ''
  }

  isSubmit = false;

  constructor(private productService: ProductService) {}

  saveData()
  {
    const data = { // recupère les valeur du formulaire
      title: this.product.title,
      content: this.product.content,
      created_at: this.product.created_at,
      updated_at: this.product.updated_at
    };

    this.productService.createProduct(data).subscribe(() => {
      this.isSubmit = true;
    }, err => {
      console.log(err);
    });
  }


  newProduct()
  {
    this.isSubmit = false;

    this.product = {
      title: '',
      content: '',
      created_at: '',
      updated_at: ''
    }
  }
}
