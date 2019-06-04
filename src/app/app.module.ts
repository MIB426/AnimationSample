import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoAnimationComponent } from './no-animation.component';
import { FaderComponent } from './fader.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleFadeComponent } from './simple-fade.component';

@NgModule({
  declarations: [
    AppComponent,
    NoAnimationComponent,
    FaderComponent,
    SimpleFadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
