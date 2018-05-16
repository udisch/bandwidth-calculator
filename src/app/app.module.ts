import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { GestureConfig } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MomentModule } from 'angular2-moment';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, 
    MatSelectModule, MomentModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
