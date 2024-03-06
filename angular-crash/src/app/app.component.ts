import { Component, OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { IProduct } from './models/product';
import { ProductComponent } from './components/product/product.component';
import { CommonModule } from '@angular/common';
import { ProductsService } from './services/products.service';


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

  constructor(private productsService: ProductsService){

  }

  ngOnInit(): void {
    this.productsService.getAll().subscribe(next: products => {
      console.log(products)
    })
  
  }

}

