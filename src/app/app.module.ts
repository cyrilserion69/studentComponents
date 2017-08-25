import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { StudInfoComponent } from './stud-info/stud-info.component';
import { AddStudComponent } from './add-stud/add-stud.component';
import { ListStudComponent } from './list-stud/list-stud.component';

@NgModule({
  declarations: [
    AppComponent,
    StudInfoComponent,
    AddStudComponent,
    ListStudComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
