import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  public visible: boolean;
  public txBoton: string;

  constructor() { }

  ngOnInit() {
    this.visible = false;
    this.txBoton = 'Mostrar';
  }
  ver_nover() {
    this.visible = !this.visible;
    this.txBoton = this.visible ? "Ocultar" : "Mostrar";
  }
}
