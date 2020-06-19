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

  getAllProduct()
  {
    return this.http.get<Product[]>(this.REST_API_SERVER, this.httpOption);
  }
}
