import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductItemModel } from '../models/product-item.model';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'boot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: ProductItemModel = new ProductItemModel();
  isAdmin: boolean;
  isEditMode: boolean;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.isAdmin = this.authService.isAdmin();
    this.activatedRoute.data.subscribe(res => {
      this.product = res.detailsData;
    });
  }

  deleteItem(ev) {
    ev.stopPropagation();
    this.productService.deleteProduct(this.product.id)
      .then(() => {
        this.router.navigate(["products", "all"]);
      })
  }

  clone() {
    this.productService.clone(this.product)
      .then(()=>{
        this.router.navigate(["products", "all"]);
      });
  }

  update() {
    this.productService.update(this.product)
      .then(
        () => { this.editModeOff() });
  }

  editModeOn() {
    this.isEditMode = true;
  }

  editModeOff() {
    this.isEditMode = false;
  }

}
