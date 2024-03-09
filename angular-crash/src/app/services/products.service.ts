import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { urlToHttpOptions } from "node:url";


import { catchError, delay, Observable, throwError } from "rxjs";
import { IProduct } from "../models/product";



@Injectable({
    providedIn:'root'
})

export class ProductsService{
    
 
    constructor(private http: HttpClient){

    }
    

    getAll(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>( 'https://fakestoreapi.com/products',{
            params: new HttpParams({
                fromObject: {limit: 5}
            })        
        }).pipe(
            delay(2000),
            
            catchError(this.errorHandler)
        )          
    }
    private errorHandler(error: HttpErrorResponse){
        return throwError(()=> error.message)

    }
}