import { Component } from '@angular/core';

@Component({
    selector: 'app-works',
    templateUrl: '\app.works.component.html',
    styleUrls: ['\app.works.component.scss']   
  })
  export class AppWorks {
      todos = ['work1', 'work2']

      onAdded(desc){
          this.todos.push(desc);
      }
  }