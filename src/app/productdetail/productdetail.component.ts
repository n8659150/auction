import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Comment, Product, ProductService} from "../shared/product.service";

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  product: Product;
  comments: Comment[];
  constructor(private routeInfo: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {
   let productId:number = this.routeInfo.snapshot.params['ProductId'];
   this.product = this.productService.getProduct(productId);
   this.comments = this.productService.getCommentsForProductId(productId);
  }

}
