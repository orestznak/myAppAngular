import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterOutlet } from '@angular/router';

import { ProductComponent } from "./components/product/product.component";

@NgModule({
    declarations: [
         
    ],

    imports:[
        BrowserModule,
        RouterOutlet,
<<<<<<< Updated upstream
        ProductComponent
        ],
=======
        ProductComponent,
        
            
    ],
>>>>>>> Stashed changes
    
    providers:[HttpClient],
    bootstrap: []
})

export class AppModule{
    
}