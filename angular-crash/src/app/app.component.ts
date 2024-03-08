import { Component, OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { IProduct } from './models/product';
import { ProductComponent } from './components/product/product.component';
import { CommonModule } from '@angular/common';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { runInThisContext } from 'vm';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent,CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})

export class AppComponent implements OnInit{
    
  title = 'angular-crash'

  products: IProduct[] = []

  constructor(private productsService: ProductsService){

  }

  ngOnInit(): void {
    this.productsService.getAll().subscribe({
      next: products => {
        this.products = products
        console.log(products)
      }
    })
  
  }

}

