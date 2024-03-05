import { Component, OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { IProduct } from './models/product';
import { ProductComponent } from './components/product/product.component';
import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})

export class AppComponent implements OnInit{
    
  title = 'angular-crash'

  products: IProduct[] = []

  constructor(private productsService: ProductService){
          }

  ngOnInit(): void {
    this.productsService.getAll().subscribe( products=>{
      console.log(products)
    })
  }



}




