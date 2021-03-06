import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tasksList: Array<string> = [];
  doneList: Array<string> = [];

  add(task) {
    this.tasksList.push(task);
  }

  remove(task) {
    this.tasksList = this.tasksList.filter(e => e !== task); // jesli spotka ten task to go usunie a reszte zostawi
    // z reszty zostanie stworzona nowa tablica, której wartość aktualizujemy
  }
  done(task) {

    // też działa
    this.doneList.push(task);
    this.tasksList = this.tasksList.filter(e => e !== task);
    // this.remove(task);
  }

}
