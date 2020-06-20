import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: [ 'tab3.page.scss' ]
})
export class Tab3Page {
  dataProduct = null;
  isSubmit = false;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getProductById(this.route.snapshot.paramMap.get('id'));
  }

  getProductById(id) {
    this.productService.getById(id).subscribe(
      (product) => {
        this.dataProduct = product;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateData() {
    // recupère les valeur du formulaire
    const data = {
      title: this.dataProduct.title,
      content: this.dataProduct.content,
      created_at: this.dataProduct.created_at,
      updated_at: this.dataProduct.updated_at
    };

    const id = this.dataProduct._id;

    // j'utilise la methode du productService
    this.productService.updateProduct(id, data).subscribe(
      () => {
        this.isSubmit = true;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
