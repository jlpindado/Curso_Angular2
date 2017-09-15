import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosService } from './libros/libros.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [LibrosService],
  declarations: []
})
export class ServiciosModule { }
