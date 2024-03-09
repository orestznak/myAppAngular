import { Component, OnInit } from "@angular/core";
import { ErrorServices } from "../../services/error.services";

@Component({
    selector: 'app-global-error',
    templateUrl:'./global-error.component.html',
    styleUrls: ['./global-error.component.css']
})

export class GlobalErrorComponent implements OnInit{
    constructor(public errorService: ErrorServices) {
        
        
    }
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
}