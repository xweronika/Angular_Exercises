import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  constructor() { }

  @Input() tasksList = [];
  @Output() emitDone = new EventEmitter();
  @Output() emitRemove = new EventEmitter();

  ngOnInit() { }


  // po kliknięciu przycisku usuń obok zadania, to zadanie zostaje
  // emitowane w góre do podrzędnego komponentu, do fukcji remove
  remove(task) {
    this.emitRemove.emit(task);
  }
  done(task) {
    this.emitDone.emit(task);
  }


}
