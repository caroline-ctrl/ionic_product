import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  currentProduct = null;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProductById(this.route.snapshot.paramMap.get('id'));
  }


  getProductById(id: string)
  {
    this.productService.getById(id).subscribe(product => {
      this.currentProduct = product;
      console.log(this.currentProduct);
    }, err => {
      console.log(err);
    });
  }
}
