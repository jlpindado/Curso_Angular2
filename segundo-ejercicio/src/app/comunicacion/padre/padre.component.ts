import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  titHijo: string;

  constructor() { }

  ocultaTit(algopasa: boolean){
    console.log('Muestra:' + algopasa);
  }
  ngOnInit() {
    this.titHijo = 'Esto viene del padre';
  }

}
