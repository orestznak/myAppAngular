import { NgModule } from '@angular/core';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';

export const routes: Routes = [
    { path: '', component: ProductPageComponent},
    { path: 'about', component: AboutPageComponent}
];


@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })

  export class AppRoutingModule { }