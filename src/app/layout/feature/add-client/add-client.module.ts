import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddClientComponent} from './add-client.component';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  imports:[
    CommonModule,
    MatCardModule,
    MatTableModule,
    RouterModule.forChild([
      {path:'',component:AddClientComponent}
    ])
  ],
  exports:[
    AddClientComponent,
    RouterModule,
    CommonModule,
    MatCardModule,
    MatTableModule
  ],
  declarations:[
    AddClientComponent
  ]
})

export class AddClientModule {

}
