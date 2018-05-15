import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MatSliderModule } from '@angular/material/slider';
import { GestureConfig } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MomentModule } from 'angular2-moment';

import 'hammerjs';
import { UnitSelectorComponent } from './unit-selector/unit-selector.component';
import { SliderAreaComponent } from './slider-area/slider-area.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UnitSelectorComponent,
    SliderAreaComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, 
    MatSliderModule, MatSelectModule, MomentModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
