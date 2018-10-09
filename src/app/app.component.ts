import { Component } from '@angular/core';
import { CssSelector } from '@angular/compiler';

@Component({
  selector: 'app-root',
  template: `<header>
              I am a header!
            </header>
            <body>
              <p>I am a body</p>
              <input type="text" [value]="var1">
              <input type="text">
              <input type="text">
              <input type="button" value="Click me">
            </body>
            <footer>I am a footer</footer>`,
  styles: [`header {font-size: 60px}'
           'body {font-size: 30px}'
           'footer {font-size: 20px}
            :host {
              position: absolute;
              left: 0;
              right: 0;
              bottom: 0;
              top: 0;
            }`]
})
export class AppVariables {
  var1 = 'One side bind';
  var2 = 'Double side bind';
}
