import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  products: Product[];
  rForm: FormGroup;
  searchform: any;                     // A property for our submitted form
  searchkeyword: string = '';

  constructor(private fb: FormBuilder, private prod: ProductService) {
    this.rForm = fb.group({
      'searchkeyword': [null, Validators.required]
    });
  }

  ngOnInit() {

  }

  searchProd(searchform) {
    this.searchkeyword = searchform.searchkeyword;
    console.log(this.searchkeyword);
    this.prod.getProductsByKeyword(this.searchkeyword).subscribe((prods: Product[]) => {
      this.products = prods;
      console.log(this.products);
    });
  }
}
