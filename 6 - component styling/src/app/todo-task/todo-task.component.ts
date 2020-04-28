import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css'],
  encapsulation: ViewEncapsulation.None,
  // po dodaniu tego, style w to-do css zmienily sie z lokalnych na globalne i teraz wszystkie li sa w kolorze
  // a ViewEncapsulation.Emulated zmienia na lokalne
  // aby style byly globalne mozna tez je umiescic w style.css
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
// NOWY KOD _________________________________________________________________________
  zmienKolor() {
    return this.tasksList.length >= 5 ? 'red' : 'green';
    // jesli jest 5 elem zwroc red, w przeciwnym wypadku zwroc green
  }
}
