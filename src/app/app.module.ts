import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeader} from './header/app.header.component';
import { AppBody } from './body/app.body.component';
import { AppFooter } from './footer/app.footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    AppBody,
    AppFooter
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, AppHeader, AppBody, AppFooter]
})
export class AppModule { }
