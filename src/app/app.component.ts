import { Component } from '@angular/core';
import { Keg } from './models/keg.model';
import { KEGS } from './mock-data/mock-kegs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  masterKegList: Keg[] = KEGS;
  selectedKeg: Keg = null;

  addKeg(newKeg: Keg) {
    this.masterKegList.push(newKeg);
  }

  editKeg(keg) {
    this.selectedKeg = keg;
  }

  resetSelected(){
    this.selectedKeg = null;
  }

}
