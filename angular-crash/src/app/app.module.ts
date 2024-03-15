import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterOutlet } from '@angular/router';
import { GlobalErrorComponent } from "./components/global-error/global-error.component";

import { ProductComponent } from "./components/product/product.component";

@NgModule({
    declarations: [
         
    ],

    imports:[
        BrowserModule,
        RouterOutlet,
        // CommonModule,
        ProductComponent,
        ReactiveFormsModule,
        FormsModule
        // GlobalErrorComponent
        ],

     
    providers:[HttpClient],
    bootstrap: []
})

export class AppModule{
    
}