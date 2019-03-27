import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KegMenuComponent } from './keg-menu/keg-menu.component';
import { NewKegFormComponent } from './new-keg-form/new-keg-form.component';

@NgModule({
  declarations: [
    AppComponent,
    KegMenuComponent,
    NewKegFormComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
