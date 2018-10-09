import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppVariables } from './app.component';

@NgModule({
  declarations: [
    AppVariables
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppVariables]
})
export class AppModule { }
