import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: '\app.body.component.html',
    styleUrls: ['\app.body.component.scss']   
  })
  export class AppBody {
      var1 = 'One side binding';
      var2 = 'Double side binding';
  }