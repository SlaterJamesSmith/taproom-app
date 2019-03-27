import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';

import { AppComponent } from './app.component';
import { KegMenuComponent } from './keg-menu/keg-menu.component';
import { NewKegFormComponent } from './new-keg-form/new-keg-form.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';

@NgModule({
  declarations: [
    AppComponent,
    KegMenuComponent,
    NewKegFormComponent,
    EditKegComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
