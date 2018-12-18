import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(environment.apiUrl + '/products');
  }

  getProductsByCategory(category_id) {
    return this.http.get(environment.apiUrl + '/categories/' + category_id);
  }

  getProductDetails(product_id) {
    return this.http.get(environment.apiUrl + '/products/' + product_id);
  }

  getProductsByKeyword(keyword) {
    return this.http.get(environment.apiUrl + '/products/search/' + keyword);
  }
}
