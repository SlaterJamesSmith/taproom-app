import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from './../models/keg.model';
import { KEGS } from './../mock-data/mock-kegs';
@Component({
  selector: 'app-keg-menu',
  templateUrl: './keg-menu.component.html',
  styleUrls: ['./keg-menu.component.scss']
})
export class KegMenuComponent {
  @Input() childKegList: Keg[];
  @Output() editKeg = new EventEmitter();
  constructor() { }

  editButtonClicked(kegToEdit: Keg) {
    this.editKeg.emit(kegToEdit);
  }
}
