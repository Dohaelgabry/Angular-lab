import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogonComponent } from './logon/logon.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    LogonComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccountModule { }
