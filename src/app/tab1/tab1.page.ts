import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
productArray: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(products => {
      this.productArray = products;
      console.log(this.productArray);
    });
  }

  deleteProduct(id)
  {
    this.productService.deleteProduct(id).subscribe(() => {
      console.log('suppression réussi');
    });
  }

}
