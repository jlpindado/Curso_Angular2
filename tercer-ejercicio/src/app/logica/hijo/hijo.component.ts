import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Item } from './../item.model';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html'
})

export class HijoComponent  implements OnInit {

  @Input() private item: Item;

  @Output() private remove = new EventEmitter<any>();

  ngOnInit() {
  }

  fireRemove() {
    this.remove.emit();
  }
}
