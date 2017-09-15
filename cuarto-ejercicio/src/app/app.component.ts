import { Component } from '@angular/core';

import { LibrosService } from './servicios/libros/libros.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  private libros: string[] = [];
  constructor( private libreria: LibrosService) {}

  buscar(titulo: string) {
    this.libros = this.libreria.buscaLibros(titulo);
  }

}
