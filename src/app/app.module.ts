import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
//Shared Module
import { SharedModule} from './Shared/shared.module';
import { AppRoutingModule} from './app-routing.module';
import {OverlayModule} from '@angular/cdk/overlay';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OverlayModule
    //feature module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
