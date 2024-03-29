import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./components/navigation/navigation.component";
import { ProductPageComponent } from "./components/pages/product-page/product-page.component";

import { ProductComponent } from "./components/product/product.component";
import { FocusDirective } from "./directives/focus.directive";

@NgModule({
    declarations: [
        
    ],

    imports:[
        BrowserModule,
        RouterOutlet,
        // CommonModule,
        ProductComponent,
        ReactiveFormsModule,
        FormsModule,
        FocusDirective,
        ProductPageComponent,
        // NavigationComponent
        // GlobalErrorComponent
        ],

     
    providers:[HttpClient],
    bootstrap: []
})

export class AppModule{
    
}