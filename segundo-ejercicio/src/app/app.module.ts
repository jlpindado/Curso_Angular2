
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonsModule } from './commons/commons.module';
import { LogicaModule } from './logica/logica.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonsModule,
    LogicaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
