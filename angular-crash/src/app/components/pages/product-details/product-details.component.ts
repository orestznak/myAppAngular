import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ModalService } from '../../../services/modal.service';
import { ProductComponent } from '../../product/product.component';
import { NavigationComponent } from '../../navigation/navigation.component';
import { IProduct } from '../../../models/product';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute
    ) {}

    // loading= false

  ngOnInit(): void {

    this.loading = true
    
    // this.productsService.getAll().subscribe(
    //   ()=> {this.loading = false
    //   })

    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'))
      this.productService.getProduct(Number(params.get('id'))).subscribe(
        product => {
          this.product = product
        }
      )
    })

    this.productService.getProduct(3).subscribe({
      
          next: product => {
            this.loading = false
            this.product = product
            // console.log(product)
          }
        
    })

    

}
}
