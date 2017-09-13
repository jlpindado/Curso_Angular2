import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormularioComponent,
    ListaComponent
  ],
  declarations: [
    FormularioComponent,
    ListaComponent
  ]
})
export class LogicaModule { }
