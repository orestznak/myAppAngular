import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalService } from '../../services/modal.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [CommonModule,
            ReactiveFormsModule,
            FormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent implements OnInit {
  constructor(private productService: ProductsService,
    private modalService: ModalService) {

  }

  productform = new FormGroup( 
    {
      title : new FormControl<string>('',[
        Validators.required,
        Validators.minLength(6)
      ]),
      price : new FormControl<number>(0,[
        Validators.required
      ]),
      description : new FormControl<string>('',[
        Validators.required,
        Validators.minLength(6)
      ])
    }
  )

  get title() {
    return this.productform.controls.title as FormControl
  }


  

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  submit() {
    console.log(this.productform.value)
    this.productService.create({
      title: this.productform.value.title as string,
      price: this.productform.value.price as number,
      description: this.productform.value.description as string,
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      rating: {
        rate: 42,
        count: 1
      }

    }).subscribe(()=>{
      this.modalService.close()
    })
  }

  

}


