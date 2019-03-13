import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { ProductItemModel } from '../models/product-item.model';
import { ProductService } from '../services/product.service';

@Injectable()
export class ProductDetailsResolver implements Resolve<any> {
  constructor(
    private productsService: ProductService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Promise<ProductItemModel> {
    return this.productsService.getProduct(route.params.productId).toPromise()
    .then((product: ProductItemModel) => {
        console.log("from resolver")
        return product;
    })
  }
}