import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {FormBuilder,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-search-clients',
  templateUrl: './search-clients.component.html',
  styleUrls: ['./search-clients.component.css']
})
export class SearchClientsComponent implements OnInit {

  public displayedColumns = ['FirstName','LastName','Gender','Birthday'];
  public dataSource = new MatTableDataSource(clients);
  public firstName:string;
  public lastName:string;
  public gender:string;
  public birthday:Date;

  public searchForm:FormGroup;
  constructor(
    private fb:FormBuilder
  ) {
    this.create();
  }

  private create(){
    this.searchForm = this.fb.group({
      FirstName:['',],
      LastName:['',],
      Gender:['',],
      Birthday:['',]
    })
  }
  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  public search(){
    console.log(this.searchForm.get('FirstName').value,this.searchForm.get('LastName').value,
      this.searchForm.get('Gender').value,this.searchForm.get('Birthday').value);
  }
}

export interface client {
  firstName: string;
  lastName: string;
  gender: string;
  birthday: string;
}

const clients:client[] = [
  {firstName:'a',lastName:'a',gender:'male',birthday:'111'},
  {firstName:'b',lastName:'b',gender:'male',birthday:'222'},
  {firstName:'c',lastName:'c',gender:'male',birthday:'333'},
  {firstName:'d',lastName:'d',gender:'male',birthday:'444'},
  {firstName:'f',lastName:'f',gender:'male',birthday:'555'},
]
