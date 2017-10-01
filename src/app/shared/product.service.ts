import {Injectable} from '@angular/core';
import construct = Reflect.construct;

@Injectable()
export class ProductService {

  private products: Product[] = [
    new Product(1, "first product", 1.99, 3.5, "this is my first product", ["fruit", "veg"]),
    new Product(2, "first product", 1.99, 3.5, "this is my first product", ["fruit", "veg"]),
    new Product(3, "first product", 1.99, 3.5, "this is my first product", ["fruit", "veg"]),
    new Product(4, "first product", 1.99, 3.5, "this is my first product", ["fruit", "veg"]),
    new Product(5, "first product", 1.99, 3.5, "this is my first product", ["fruit", "veg"]),
    new Product(5, "first product", 1.99, 3.5, "this is my first product", ["fruit", "veg"]),
  ];
  private comments: Comment[] = [
    new Comment(1, 1, "2017-2-2 22:22:22", "ALLEN", 3, "good"),
    new Comment(2, 1, "2017-2-2 22:22:22", "ALLEN", 3, "good"),
    new Comment(3, 1, "2017-2-2 22:22:22", "ALLEN", 3, "good"),
    new Comment(4, 2, "2017-2-2 22:22:22", "ALLEN", 3, "good"),
  ];

  constructor() {
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product) => product.id === id);
  }

  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId === id);
  }


}


export class Product {
  constructor(public id: number,
              public title: string,
              public price: number,
              public rating: number,
              public desc: string,
              public category: Array<string>) {

  }
}

export class Comment {
  constructor(public id: number,
              public productId: number,
              public timestamp: string,
              public user: string,
              public rating: number,
              public content: string) {

  }
}
