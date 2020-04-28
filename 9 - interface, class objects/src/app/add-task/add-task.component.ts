import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask: string;
  // @Output() emitTask = new EventEmitter();
  // USUWAMY bo zamiast tego wstrzykujemy serwis do konstruktora

  add() {
    const task: Task = { name: this.newTask, created: new Date() };
    // this.emitTask.emit(this.newTask); USUWAMY
    this.taskService.add(task); // serwis
    this.newTask = '';
  }


  constructor(private taskService: TasksService) { }

  ngOnInit() {
  }



}
