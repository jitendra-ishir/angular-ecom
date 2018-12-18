import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  id: number;
  private sub: any;
  constructor(
    private route: ActivatedRoute,
    private prod: ProductService
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // console.log(this.id);
      this.getProductDetails(this.id);
    });
  }

  getProductDetails(id): void {
    this.prod.getProductDetails(id).subscribe((prod: Product) => {
      this.product = prod;
    });
  }

}
