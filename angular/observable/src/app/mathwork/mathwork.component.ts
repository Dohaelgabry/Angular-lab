import { AddnumberService } from './../service/addnumber.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mathwork',
  templateUrl: './mathwork.component.html',
  styleUrls: ['./mathwork.component.css']
})
export class MathworkComponent implements OnInit {
  unmb1: number =1 ;
  limit: number =2 ;
  numblist:string[]=[]
  mySubscription?:Subscription
  constructor(private Addnumber:AddnumberService){}
  ngOnInit(): void {
    this.mySubscription=this.Addnumber.math(this.unmb1,this.limit).subscribe(data=>{
      this.numblist.push(data)
    })
  }
  show(numb1:string,numb2:string){
  this.mySubscription?.unsubscribe()
  this.numblist=[];
  this.mySubscription=this.Addnumber.math(Number(numb1),Number(numb2)).subscribe(data=>{this.numblist.push(data)})
  }
}
