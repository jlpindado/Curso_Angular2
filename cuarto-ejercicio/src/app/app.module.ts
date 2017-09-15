import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServiciosModule } from './servicios/servicios.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServiciosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
