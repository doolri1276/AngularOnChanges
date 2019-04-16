import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NoneInputBindComponent } from './none-input-bind/none-input-bind.component';
import { PropInputBindComponent } from './prop-input-bind/prop-input-bind.component';

@NgModule({
  declarations: [
    AppComponent,
    NoneInputBindComponent,
    PropInputBindComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
