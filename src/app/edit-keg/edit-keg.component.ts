import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './../models/keg.model'
@Component({
  selector: 'app-edit-keg',
  templateUrl: './edit-keg.component.html',
  styleUrls: ['./edit-keg.component.scss']
})
export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() done = new EventEmitter;
  constructor() { }

  doneEditing() {
    this.done.emit();
  }

}
