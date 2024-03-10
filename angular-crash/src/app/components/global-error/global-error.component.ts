import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ErrorServices } from "../../services/error.services";

@Component({
    selector: 'app-global-error',
    standalone: true,
    templateUrl:'./global-error.component.html',
    styleUrls: ['./global-error.component.css'],
    imports:[CommonModule]
})

export class GlobalErrorComponent implements OnInit{
    constructor(public errorService: ErrorServices) {
        
        
    }
    ngOnInit(): void {
        // throw new Error("Method not implemented.");
    }
}