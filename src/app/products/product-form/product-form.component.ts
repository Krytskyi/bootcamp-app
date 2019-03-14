import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'boot-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent implements OnInit {

  @Input() product: any;

  arr =['a', 'b', 'c'];

  form: FormGroup;

  categories: any[] = [{
    label: 'BMW'
  }, {
    label: 'Mercedes'
  }, {
    label: 'Zhyguli'
  }, {
    label: 'Audi'
  }, {
    label: 'Toyota'
  }];

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [null, Validators.required],
      description: null,
      price: null,
      category: null,
      imgUrl: [null, this.validateUrl],
      isHidden: null
    });

    this.form.valueChanges.subscribe((value) => {
      Object.assign(this.product, this.form.value);
    });

    if (this.product) {
      this.form.patchValue(this.product, { emitEvent: false });
    }

    this.form.get("isHidden").valueChanges.subscribe((value) => {
      if (value) {
        this.form.get("price").disable();
      } else {
        this.form.get("price").enable();
      }
    });

    // setInterval(()=>{
    //   console.log(this.arr);
    //   this.arr.push('a');
    // },2000);
    // setInterval(()=>{
    //   this.cdr.detectChanges();
    // },5000);
  }

  validateUrl(control: AbstractControl) {

    if (control.value && !control.value.startsWith("http")) {
      return {
        validImgUrl: true
      }
    }
    return null;
  }


  add(): void {
    // setInterval(()=>{
    //   this.arr.push('a');
    // });
    // this.product.name = 'test';
  }
}
