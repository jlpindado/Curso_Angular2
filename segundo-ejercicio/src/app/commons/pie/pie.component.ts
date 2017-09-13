import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  public autor: string;
  public anyo: number;

  constructor() { }

  ngOnInit() {
    this.autor = 'JLPG';
    this.anyo = 2017;
  }

}
