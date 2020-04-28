import { Component, OnInit } from '@angular/core';
import { ClickService } from './services/click.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ClickService]
})
export class AppComponent implements OnInit {
  allClicks = 0;

  ngOnInit(): void {
    this.clickService.getSum().subscribe(clicks => {
      this.allClicks = clicks;
    });
  }

  constructor(private clickService: ClickService) { }

}
