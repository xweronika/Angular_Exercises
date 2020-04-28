import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input()
tasks;

@Output()
eventTask = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  select(task){
    this.eventTask.emit(task);
  }
}
