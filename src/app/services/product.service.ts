import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  REST_API_SERVER = "http://localhost:3000/api/product/";
  httpOption = {
    headers: new HttpHeaders({'content-type' : 'application/json'})
  };

  constructor(private http: HttpClient) { }

  // voir tous les products
  getAllProduct()
  {
    return this.http.get<Product[]>(this.REST_API_SERVER, this.httpOption);
  }


  // Voir un product
  getById(id: string)
  {
    return this.http.get<Product>(this.REST_API_SERVER + id);
  }


  // créer un product
  createProduct(data: Product)
  {
    return this.http.post<Product>(this.REST_API_SERVER, data);
  }


  // modifier un product
  updateProduct(id: string, data: Product)
  {
    return this.http.put<Product>(this.REST_API_SERVER + id, data);
  }

  // supprimer un product
  deleteProduct(id: string)
  {
    return this.http.delete<Product>(this.REST_API_SERVER + id);
  }
}
