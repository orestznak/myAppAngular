import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ModalService } from '../../../services/modal.service';
import { ProductComponent } from '../../product/product.component';
import { NavigationComponent } from '../../navigation/navigation.component';
import { IProduct } from '../../../models/product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule,
            ProductComponent,
            NavigationComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})

export class ProductDetailsComponent implements OnInit{
  @Input() product: IProduct
  loading: boolean;
  
  constructor(
    public productService: ProductsService,
    public modalService: ModalService,
    ) {}

    // loading= false

  ngOnInit(): void {

    this.loading = true
    
    // this.productsService.getAll().subscribe(
    //   ()=> {this.loading = false
    //   })

    this.productService.getProduct(3).subscribe({
      
          next: product => {
            this.loading = false
            this.product = product
            // console.log(product)
          }
        
    })

    

}
}
