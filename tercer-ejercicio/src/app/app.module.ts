import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogicaModule } from './logica/logica.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LogicaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
