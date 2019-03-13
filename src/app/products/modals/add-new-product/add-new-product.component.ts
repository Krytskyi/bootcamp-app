import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'boot-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<AddNewProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productService: ProductService
  ) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  create(){
    this.productService.createProduct(this.data).then(() => {
      this.dialogRef.close();
    })
  }
}
