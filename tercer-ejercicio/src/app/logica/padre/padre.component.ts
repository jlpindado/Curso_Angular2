import { Component, OnInit } from '@angular/core';

import { Item } from './../item.model';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  private items: Item[] = [];
  public elItem: string;

  constructor() { }

  ngOnInit() {
  }

  addItem(description: string) {
    this.items.push({ description, checked: false });
  }

  removeItem(item: Item) {
    let indice = this.items.indexOf(item);
    if (indice > -1) {
      this.items.splice(indice, 1);
    }
  }

}
