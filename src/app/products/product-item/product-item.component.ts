import { Component, OnInit, Input } from '@angular/core';
import { ProductItemModel } from '../models/product-item.model';
import { ProductService } from '../services/product.service';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'boot-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input("product")
  product: ProductItemModel;

  isAdmin: boolean;

  constructor(
    private productService: ProductService,
    private authService: AuthService,
    ) { }

  ngOnInit() {
    this.isAdmin = this.authService.isAdmin();
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
