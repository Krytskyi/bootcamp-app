import { Component, OnInit } from '@angular/core';
import { ProductItemModel } from '../models/product-item.model';
import { ProductService } from '../services/product.service';

import { ActivatedRoute } from "@angular/router";
import { MatDialog } from '@angular/material';
import { AddNewProductComponent } from '../modals/add-new-product/add-new-product.component';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'boot-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: ProductItemModel[];
  searchQuery: string;
  isAdmin: boolean;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.isAdmin = this.authService.isAdmin();
    this.activatedRoute.params.subscribe(res => {
      this.productService.getProducts().subscribe((products: ProductItemModel[]) => {
        this.products = res.category === 'all'
          ? products
          : products.filter(el => el.category.toLowerCase() === res["category"]);
      });
    });


  }

  openAddNewProduct(): void {
    const dialogRef = this.dialog.open(AddNewProductComponent, {
      width: '450px',
      data: {
        name: null,
        description: null,
        price: null,
        category: null,
        imgUrl: null,
        isHidden: null
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    })
  }

}
