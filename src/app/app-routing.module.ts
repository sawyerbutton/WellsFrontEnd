import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const appRoutes:Routes = [
  {path:'',redirectTo: '/login', pathMatch: 'full'},
  {path:'login',loadChildren:'./login/login.module#LoginModule'},
  {path:'dashBoard',loadChildren:'./layout/dash-board/dash-board.module#DashBoardModule'}
];

@NgModule ({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true}
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
