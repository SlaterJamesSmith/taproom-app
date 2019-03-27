import { KegMenuComponent } from './../keg-menu/keg-menu.component';
import { Keg } from './../models/keg.model';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-keg-form',
  templateUrl: './new-keg-form.component.html',
  styleUrls: ['./new-keg-form.component.scss']
})
export class NewKegFormComponent {

  // @Input() childKegList: Keg[];

  // constructor() { }

  @Output() sendKeg = new EventEmitter();

  submitKeg(name: string, brand: string, price: string, percent: string) {
    let newKeg = new Keg(name, brand, parseInt(price), percent);
    this.sendKeg.emit(newKeg);
  }
}
