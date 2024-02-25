import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IProduct } from './models/product';

import {produts as data} from './data/products'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angular-crash'

  products: IProduct[] = data
}
