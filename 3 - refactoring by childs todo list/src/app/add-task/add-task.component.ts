import { Component, OnInit, Output, EventEmitter } from '@angular/core'; 
// Uwaga ! Trzeba EventEmitter dopisać tu ręcznie, a podkreślaną automatyczną  
// deklarację EventEmittera, która stworzyła się automatycznie - należy usunąć !!!

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask;
  @Output() emitTask = new EventEmitter();

  add() {
    this.emitTask.emit(this.newTask); //emituj nowe zadanie do nadrzędnego komponentu
    this.newTask = '';
  }


  constructor() { }

  ngOnInit() {
  }



}
