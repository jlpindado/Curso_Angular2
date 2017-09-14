import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})

export class HijoComponent implements OnInit {

  visible = true;

  @Input() titulo;
  @Output() algopasa = new EventEmitter<boolean>();

  click() {
    this.visible = !this.visible;
    this.algopasa.emit(this.visible);
  }

  constructor() { }

  ngOnInit() {  }

}
