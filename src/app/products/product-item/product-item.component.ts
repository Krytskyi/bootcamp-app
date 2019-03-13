import { Component, OnInit, Input } from '@angular/core';
import { ProductItemModel } from '../models/product-item.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'boot-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input("product")
  product: ProductItemModel;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  deleteItem(ev): void {
    ev.stopPropagation();
    this.productService.deleteProduct(this.product.id);
  }

  clone(ev){
    ev.stopPropagation();
    this.productService.clone(this.product);
  }

}
