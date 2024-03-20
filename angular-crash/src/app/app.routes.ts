import { Routes } from '@angular/router';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ProductComponent } from './components/product/product.component';

export const routes: Routes = [
    { path: '', component: ProductComponent},
    { path: 'about', component: AboutPageComponent}
];
