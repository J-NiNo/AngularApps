import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-todo',
    templateUrl: '\app.todo.component.html',
    styleUrls: ['\app.todo.component.scss']   
  })
  export class AppTodo {
      description: string;

      @Output() onAdded = new EventEmitter<string>();
      add(desc){
          this.onAdded.emit(desc);
      }
  }