import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeadBarComponent} from './head-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material';


@NgModule({
  imports:[
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  exports:[
    HeadBarComponent,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  declarations:[
    HeadBarComponent
  ]
})

export class HeadBarModule {

}
