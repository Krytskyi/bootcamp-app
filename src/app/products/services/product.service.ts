import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ProductItemModel } from '../models/product-item.model';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: AngularFirestore) {

  }

  getProducts(): Observable<ProductItemModel[]> {
    return this.firestore.collection<ProductItemModel[]>('products').snapshotChanges()
      .pipe(
        map((products) => {
          return products.map(e => {
            return {
              id: e.payload.doc.id,
              ...e.payload.doc.data()
            };
          }) as any[]
        })
      );
  }

  getProduct(id: string): any {
    return this.firestore.doc('products/' + id)
      .get()
      .pipe(
        map((product) => {
          var productItem = {
            id: product.id,
            ...product.data()
          };
          return productItem;
        })
      );
  }

  clone(product): Promise<any> {
    delete product.id;
    return this.firestore.collection('products').add(product);
  }

  update(product: ProductItemModel): Promise<any> {
    return this.firestore.doc('products/' + product.id).update(product);
  }

  createProduct(product: ProductItemModel): Promise<any> {
    return this.firestore.collection('products').add(product);
  }

  deleteProduct(id: string) {
    return this.firestore.doc('products/' + id).delete();
  }
}
