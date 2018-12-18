import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  productcount: number;

  constructor(prod: ProductService) {
    prod.getProducts().subscribe((prods: Product[]) => {
        this.products = prods;
        this.productcount = this.products.length;
    });
  }

  ngOnInit() {
  }
}
