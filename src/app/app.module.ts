import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppHeader} from './header/app.header.component';
import { AppBody } from './body/app.body.component';
import { AppFooter } from './footer/app.footer.component';
import { AppWorks } from './body/works/app.works.component';
import { AppTodo } from './body/works/app.todo.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    AppBody,
    AppFooter,
    AppWorks,
    AppTodo
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
