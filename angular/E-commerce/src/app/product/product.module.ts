import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetalisComponent } from './detalis/detalis.component';



@NgModule({
  declarations: [
    ListComponent,
    DetalisComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
