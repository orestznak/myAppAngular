import { Component, OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { ProductComponent } from './components/product/product.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { CreateProductComponent } from './components/create-product.component/create-product.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';



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
    ProductPageComponent
    // FocusDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})

export class AppComponent{
    
  

}

