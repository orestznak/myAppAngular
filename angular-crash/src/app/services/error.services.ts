import { Injectable } from "@angular/core";
import { clear } from "console";
import { clearScreenDown } from "readline";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ErrorServices{
    
      error$ = new Subject<string>() 

      handle(message: string) {
        this.error$.next(message)
      }

      clear() {
        this.error$.next('')
      }
    
}