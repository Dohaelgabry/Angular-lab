import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddnumberService {
timer:any
math(start:number,limit:number){
  return new Observable<string>((Observable)=>{
    let s=0;
    let b="";
    this.timer=setInterval(()=>{
    if (s!=limit){
      b = `${start}*${s}=${start*s}`;
      Observable.next(b)
      s++
    }

    },1000)
  })
}
unsubscription(){
  clearInterval(this.timer)
}
  constructor() { }
 
}
