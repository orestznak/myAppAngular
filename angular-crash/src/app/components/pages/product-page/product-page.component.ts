import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../services/modal.service';
import { ProductsService } from '../../../services/products.service';
import { ProductComponent } from '../../product/product.component';
import { ModalComponent } from "../../modal/modal.component";
import { CreateProductComponent } from "../../create-product.component/create-product.component";
import { GlobalErrorComponent } from '../../global-error/global-error.component';
import { FilterProductsPipe } from '../../../pipes/filter-products.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from '../../navigation/navigation.component';
import { query } from 'express';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-product-page',
    standalone: true,
    templateUrl: './product-page.component.html',
    styleUrl: './product-page.component.css',
    imports: [
      ProductComponent, 
      CommonModule, 
      HttpClientModule, 
      GlobalErrorComponent,
      FormsModule,
      FilterProductsPipe,
      ModalComponent,
      CreateProductComponent,
      ReactiveFormsModule,
      // ProductPageComponent,
      NavigationComponent
        
      ]
})
export class ProductPageComponent implements OnInit{
  title = 'My First Angular APP'

  // products: IProduct[] = []
  // products$: Observable<IProduct[]>
  loading= false
  term = ''

  constructor(
    public productsService: ProductsService,
    public modalService: ModalService,
    public activatedRoute: ActivatedRoute
    // public navigateTo: NavigationComponent
    
    ) {}

  ngOnInit(): void {

    this.loading = true

    this.activatedRoute.queryParams.subscribe(params => {
      const id = params['id'];
      
      console.log(id);
    });
    // this.productsService.getAll().subscribe(
    //   ()=> {this.loading = false
    //   })
   
    
    this.productsService.getAll().subscribe({
      next: () => {
        this.loading = false
        // console.log(products)
      }
    })
    
    // this.productsService.getAll().subscribe({
    //   next: products => {
    //     console.log(products)
    //   }

    // })
  
  }

}
