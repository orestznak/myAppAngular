import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

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
  
  productform = new FormGroup( 
    {
      title : new FormControl<string>('',[
        Validators.required,
        Validators.minLength(6)
      ])
    }
  )


  constructor() {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  submit() {
    console.log(this.productform.value)
  }

  

}


