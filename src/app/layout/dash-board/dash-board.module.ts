import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardComponent} from './dash-board.component';
import { RouterModule} from '@angular/router';
import {HeadBarModule} from '../head-bar/head-bar.module';
import {LeftNavModule} from '../left-nav/left-nav.module';

@NgModule({
  imports:[
    CommonModule,
    HeadBarModule,
    LeftNavModule,
    RouterModule.forChild(
      [{
        path:'',
        component:DashBoardComponent,
        children:[
          // {path: '', redirectTo:'searchClient',pathMatch:'full'},
          {path:'addClient',loadChildren:'../feature/add-client/add-client.module#AddClientModule'},
          {path:'searchClient',loadChildren:'../feature/search-clients/search-clients.module#SearchClientsModule'},
          {path:'viewAppointment',loadChildren:'../feature/view-appointment/view-appointment.module#ViewAppointmentModule'}
        ]
      }
    ])
  ],
  exports:[
    CommonModule,
    RouterModule,
    HeadBarModule,
    LeftNavModule,
    DashBoardComponent
  ],
  declarations:[
    DashBoardComponent
  ]
})

export class DashBoardModule {}
