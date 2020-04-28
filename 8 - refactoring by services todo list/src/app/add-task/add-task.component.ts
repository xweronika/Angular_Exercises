import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../services/tasks.service';

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
   // this.emitTask.emit(this.newTask); USUWAMY
   this.taskService.add(this.newTask); // serwis
   this.newTask = '';
  }


  constructor(private taskService: TasksService) { }

  ngOnInit() {
  }



}
