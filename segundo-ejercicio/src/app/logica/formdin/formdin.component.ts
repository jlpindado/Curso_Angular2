import { Component, OnInit } from '@angular/core';

interface Provincia {
  idProv: number,
  nombre: string
}

@Component({
  selector: 'app-formdin',
  templateUrl: './formdin.component.html',
  styleUrls: ['./formdin.component.css']
})
export class FormdinComponent implements OnInit {

  constructor() { }
  public opPrintTxt: string;
  public opPrint: boolean;

  public opTonoTxt: string;
  public opTono: boolean;

  public provTxt: string;
  public provincias: Array<Provincia>;
  public provSelec;

  ngOnInit() {
    this.opPrintTxt = 'Imprimir: No';
    this.opPrint = false;

    this.opTonoTxt = 'Tono: Oscuro';
    this.opTono = false;

    this.provTxt = 'Provincia:';
    this.provincias = [
      {idProv: 0, nombre: ''},
      {idProv: 1, nombre: 'Ávila'},
      {idProv: 2, nombre: 'Burgos'},
      {idProv: 3, nombre: 'León'},
      {idProv: 4, nombre: 'Palencia'},
      {idProv: 5, nombre: 'Salamanca'},
      {idProv: 6, nombre: 'Segovia'},
      {idProv: 7, nombre: 'Soria'},
      {idProv: 8, nombre: 'Valladolid'},
      {idProv: 9, nombre: 'Zamora'}
    ];

    this.provSelec = {idProv: 0, nombre: 'Ninguna'};
  }

  cambia_print() {
    this.opPrint = !this.opPrint;
    this.opPrintTxt = this.opPrint ? 'Imprimir: No' : 'Imprimir: Sí';
  }

  cambia_tono() {
    this.opTono = !this.opTono;
    this.opTonoTxt = this.opTono ? 'Tono: Oscuro' : 'Tono: Claro';
  }
}
