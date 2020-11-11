import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {FormBuilder,Validator} from '@angular/forms';
import {PasswordValidator} from './shared/password.validator';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-form';
  constructor (private fb:FormBuilder){}
  registrationForm=this.fb.group({
    userName:['Angular'],
    password:[],
    confirmPassword:[],
    address:[],
    age:[]
  },{validator:PasswordValidator});
  /*registrationForm=new FormGroup({
   userName:new FormControl(),
   password:new FormControl(),
   confirmPassword:new FormControl()

   } );*/
}
