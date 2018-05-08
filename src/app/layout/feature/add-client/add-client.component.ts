import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {st} from '@angular/core/src/render3';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  public mainForm:FormGroup;
  public livingArrangement:string;
  constructor(
    private fb:FormBuilder
  ) {
    this.create();
  }

  public create(){
    this.mainForm = this.fb.group({
      FirstName:['',Validators.required],
      MiddleName:['',],
      LastName:['',Validators.required],
      Birthday:['',Validators.required],
      Gender:['',Validators.required],
      Phone:['',],
      Email:['',Validators.email],
      Race:['',],
      AddressOne:['',Validators.required],
      AddressTwo:['',],
      State:['',Validators.required],
      City:['',Validators.required],
      ZipCode:['',Validators.required],
      Residential:['',],
      Martial:['',],
      LivingTogether:['',],
      Employment:['',],
      PartTime:['',],
    })
  }

  ngOnInit() {
  }

  public submit(){

  }

}

