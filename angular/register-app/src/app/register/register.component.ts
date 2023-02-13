
import { Component,OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegister } from '../models/account';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
addform!:FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private authServ: AuthService,
    private router: Router) {
    this.addform=this.formBuilder.group({
      Name: ["", [Validators.required,Validators.minLength(9)]],
      UserName: ["", [Validators.required, Validators.minLength(4)]],
      password: ["", [Validators.required, Validators.maxLength(5) ]]
    })
  }

  add(){
    console.log(this.addform.value)
    this.authServ.register(this.addform.value as UserRegister).subscribe({
      next: (res) => {
        this.router.navigateByUrl("/user/login")
      },
      error: (err) => console.log(err)
    })
    
  }
  ngOnInit():void{

  }
}


