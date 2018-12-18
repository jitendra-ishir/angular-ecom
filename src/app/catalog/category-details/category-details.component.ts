import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CategoryService } from './../../services/category.service';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  products: Product[];
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
      this.getCategoryDetails(this.id);
    });
  }

  getCategoryDetails(id): void {
    this.prod.getProductsByCategory(id).subscribe((prods: Product[]) => {
      this.products = prods;
    });
  }
}
