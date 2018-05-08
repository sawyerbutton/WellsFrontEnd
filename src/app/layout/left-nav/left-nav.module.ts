import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LeftNavComponent} from './left-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material';
import { RouterModule} from '@angular/router';
@NgModule({
  imports:[
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    RouterModule
  ],
  exports:[
    LeftNavComponent,
    MatSidenavModule,
    MatButtonModule,
    RouterModule
  ],
  declarations:[
    LeftNavComponent
  ]
})

export class LeftNavModule {

}
