import { Component } from '@angular/core';
import { match } from 'minimatch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-kurs';
  date = new Date();

  dog0 = new Dog('Reksio', 10);

  showDog() {
    return 'Mój pies to ' + this.dog0.name + ', ma ' + this.dog0.age + 'lat.';
  }
  pi = Math.PI;

  dog: Dog;

  days = ['pon', 'wt', 'sr', 'czw', 'pt'];

  dogs = new Array<Dog>(); //lista
  constructor() {
    this.dogs.push(new Dog('Max', 4), new Dog('Łatek', 3), new Dog('Mela', 1));

  }

  isTrue = true;
  isFalse = false;

  show() {
    this.isTrue = !this.isTrue;
  }

  hidden() {
    this.isFalse = !this.isFalse;
  }


}



class Dog {
  constructor(public name: string, public age: number) {

  }
}
