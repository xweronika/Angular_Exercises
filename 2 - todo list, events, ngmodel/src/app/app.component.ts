import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //zapisywanie i aktualizowanie inputów
  proffesion = "programista";
  skill = "angular";

  saveP(event) {
    this.proffesion = event.target.value;
  }

  saveS(event) {
    this.skill = event.target.value;
  }

  proffesion2 = "programista2";
  skill2 = "angular2";
  //__________________________________________________
  //lista zadań

  newTask: string;
  listazadan: Array<string> = [];
  listazrobionych: Array<string> = [];

  add() {
    this.listazadan.push(this.newTask);
    this.newTask = "";
  }

  usun(task){
    this.listazadan = this.listazadan.filter(e=>e!==task); //jesli spotka ten task to go usunie a reszte zostawi
//z reszty zostanie stworzona nowa tablica, której wartość aktualizujemy
  }
  zrobione(task){

    // też działa
    this.listazrobionych.push(task);
    this.listazadan = this.listazadan.filter(e=>e!==task);
    //this.remove(task);
  }

  //____________________________
  tasksList = ['Sprzątanie', 'Gotowanie', 'Nauka'];

}
