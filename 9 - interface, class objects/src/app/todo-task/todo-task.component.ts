import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';

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

  tasksList: Array<Task> = [];

  constructor(private taskService: TasksService) {
    this.taskService.getTasksListObs().subscribe((tasks: Array<Task>) => {
      this.tasksList = tasks;
    });


  }

  // @Output() emitDone = new EventEmitter(); USUWAMY
  // @Output() emitRemove = new EventEmitter(); USUWAMY

  ngOnInit() { }


  remove(task: Task) {
    this.taskService.remove(task);
  }
  done(task: Task) {
    this.taskService.done(task);
  }

  zmienKolor() {
    return this.tasksList.length >= 5 ? 'red' : 'green';

  }
}
