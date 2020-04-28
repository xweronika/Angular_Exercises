import { Component, OnInit } from '@angular/core';
import { ClickService } from '../services/click.service';

@Component({
  selector: 'app-klikacz1',
  templateUrl: './klikacz1.component.html',
  styleUrls: ['./klikacz1.component.css'],
  // providers: [ClickService] - jesli chcemy 2 niezalezne serwisy
  // to osobno w child'ah, a jak 1 wspolny to w app
})
export class Klikacz1Component implements OnInit {

  click = 0;

  constructor(private clickService: ClickService) {
  }

  ngOnInit() {
  }

  add() {
    this.click += 1;
    this.clickService.addClicks();
  }
}
