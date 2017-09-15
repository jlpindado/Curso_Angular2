import { Injectable } from '@angular/core';

@Injectable()
export class LibrosService {
  buscaLibros(titulo: string) {
    return [
      'Libro 1',
      'Libro 2',
      'Libro 3'
    ];
  }

  constructor() { }

}
