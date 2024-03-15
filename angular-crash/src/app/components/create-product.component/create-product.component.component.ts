import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-product.component.component.html',
  styleUrl: './create-product.component.component.css'
})
export class CreateProductComponentComponent implements OnInit {
  
  form = new FormGroup( 
    {
      title: new FormControl<string>('',[
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
    console.log(this.form.value)
  }

  

}


