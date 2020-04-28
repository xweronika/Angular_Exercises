import {
  Component, OnInit, Input, Output, OnChanges, SimpleChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy
} from '@angular/core';
import { Dog } from '../app.component';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  inputText;
  @Input()
  inputDog: Dog;
  show = true;

  // Sprawdza czy zmieniły sie pola inputów
  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    console.log('ngOnChanges - uruchomione! #1');
    console.log(changes);
  }
  // Wywołuje sie po inicjalizacji naszego komponentu
  // Uruchamia sie po kostruktorze i po ngOnChange
  ngOnInit(): void {
    console.log('ngOnInit - uruchomione! - #2');
    this.inputDog.name = 'Inne imię';
  }

  // Wyłapuje każdą zmianę
  ngDoCheck(): void {
    console.log('ngDoCheck - uruchomione! - #3');
  }
  // Uruchamia się po inicjalizacji <ng-content>
  ngAfterContentInit() {
    console.log('ngAfterContentInit - uruchomione! - #4');
  }
  // Uruchamia się po każdej zmianie np <ng-content>
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked - uruchomione! - #5');
  }
  // Uruchamia się po inicjalizacja widoku
  ngAfterViewInit() {
    console.log('ngAfterViewInit - uruchomione! - #6');
  }
  // Uruchamia się po każdej zmianie w widoku
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked - uruchomione! - #7');
  }
// Uruchamia się po każdej zmianie w widoku
  ngOnDestroy(){
    console.log('ngOnDestroy - uruchomione! - #8');
  }

  content() {
    this.show = !this.show;
  }

}
