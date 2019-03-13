import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';

import { FilterPipe } from "@shared/pipes/filter.pipe";

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductService } from './services/product.service';
import { FirestoreSettingsToken, AngularFirestoreModule } from '@angular/fire/firestore';
import { MatButtonModule, MatCardModule, MatSelectModule, MatOption, MatOptionModule, MatCheckboxModule, MatDialogModule, MatIconModule } from '@angular/material';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { AddNewProductComponent } from './modals/add-new-product/add-new-product.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent, 
    ProductItemComponent,
    FilterPipe,
    ProductDetailsComponent,
    ProductFormComponent,
    AddNewProductComponent,
  ],
  entryComponents: [
    AddNewProductComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    AngularFirestoreModule,
    ProductsRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ProductsListComponent
  ],
  providers: [
    ProductService,
    { provide: FirestoreSettingsToken, useValue: {} },
  ]
})
export class ProductsModule { }
