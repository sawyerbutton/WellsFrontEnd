import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewAppointmentComponent} from './view-appointment.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports:[
    CommonModule,
    RouterModule.forChild([
      {path:'',component:ViewAppointmentComponent}
    ])
  ],
  exports:[
    ViewAppointmentComponent,
    RouterModule,CommonModule
  ],
  declarations:[
    ViewAppointmentComponent
  ]
})

export class ViewAppointmentModule {

}
