import { Component, OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { IProduct } from './models/product';
import { ProductComponent } from './components/product/product.component';
import { CommonModule } from '@angular/common';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { CreateProductComponent } from './components/create-product.component/create-product.component';
import { ModalService } from './services/modal.service';
import { FocusDirective } from './directives/focus.directive';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    ProductComponent, 
    CommonModule, 
    HttpClientModule, 
    GlobalErrorComponent,
    FormsModule,
    FilterProductsPipe,
    ModalComponent,
    CreateProductComponent,
    ReactiveFormsModule,
    // FocusDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})

export class AppComponent implements OnInit{
    
  title = 'angular app'

  // products: IProduct[] = []
  // products$: Observable<IProduct[]>
  loading= false
  term = ''

  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
    
    ) {}

  ngOnInit(): void {

    this.loading = true
    
    this.productsService.getAll().subscribe(
      ()=> {this.loading = false
      })

    // this.productsService.getAll().subscribe({
    //   next: products => {
    //     this.products = products

    //     this.loading = false
    //     // console.log(products)
    //   }
    // })

    // this.productsService.getAll().subscribe({
    //   next: products => {
    //     console.log(products)
    //   }

    // })
  
  }

}

