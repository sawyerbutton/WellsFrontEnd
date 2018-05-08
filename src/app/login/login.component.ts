import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher} from '@angular/material';
import { FormGroup,FormBuilder,Validators,FormControl,FormGroupDirective,NgForm} from '@angular/forms';
import {Router} from '@angular/router';

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  // public matcher = new MyErrorStateMatcher();
  public loginForm:FormGroup;
  //variables
  public Username:string;
  public Password:string;
  public Role:string;
  constructor(
    private fb:FormBuilder,
    public route:Router
  ) {
    this.createForm();
  }

  public createForm(){
    this.loginForm = this.fb.group({
      userName:['',Validators.required],
      password:['',Validators.required],
      role:['',Validators.required]
    })
  }

  ngOnInit() {
  }

  public login(){
    this.route.navigateByUrl('dashBoard');
  }

}


