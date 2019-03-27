import { Component, OnInit } from '@angular/core';
import { Keg } from './../models/keg.model';
import { KEGS } from './../mock-data/mock-kegs';
@Component({
  selector: 'app-keg-menu',
  templateUrl: './keg-menu.component.html',
  styleUrls: ['./keg-menu.component.scss']
})
export class KegMenuComponent implements OnInit {
  kegs: Keg[] = KEGS;

  constructor() { }

  ngOnInit() {

  }

}
