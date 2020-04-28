import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class ClickService {

private sumClicks = 0;
private sum = new Subject();

  constructor( private log: LogService) { }

addClicks(){
  this.sumClicks += 1;
  console.log('Suma: ');
  console.log(this.sumClicks);
  this.sum.next(this.sumClicks); // dziala jak emmiter
  this.log.logger('Kliknięcie');
}

getSum(): Observable <any> {
  return this.sum.asObservable();
}

}
