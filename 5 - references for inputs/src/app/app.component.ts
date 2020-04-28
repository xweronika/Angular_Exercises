import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskslist = ['Sprzatanie', 'Gotowanie', 'Nauka']

  selected(task): void {
    console.log(task);
  }
  add(input: HTMLInputElement) {
 this.taskslist.push(input.value);
  }
}
