import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ModalService } from '../../../services/modal.service';
import { ProductComponent } from '../../product/product.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule,
            ProductComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})

export class ProductDetailsComponent implements OnInit{
  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
    
    ) {}
    loading= false

  ngOnInit(): void {

    this.loading = true
    
    // this.productsService.getAll().subscribe(
    //   ()=> {this.loading = false
    //   })

    this.productsService.getProduct(1).subscribe({
      next: () => {
        this.loading = false
        // console.log(product)
      }
    })

}
}
