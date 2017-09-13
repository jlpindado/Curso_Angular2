
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CabeceraComponent,
    PieComponent
  ],
  declarations: [
    CabeceraComponent,
    PieComponent
  ]
})
export class CommonsModule { }

