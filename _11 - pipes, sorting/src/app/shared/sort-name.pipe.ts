import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task';

@Pipe({
  name: 'sortName'
  // pure: false - jest to mało wydajne bo cały czas odświeza i sortuje
  // dlatego do tablicy tasków używamy slice this.tasksList = tasks.slice(),
  // wtedy przy dodaniu nowego zadania program będzie myślał że to inna
  // tablica i na nowo ją posortuje
})
export class SortNamePipe implements PipeTransform {

  transform(value: Array<Task>, ...args: any[]): Array<Task> {
    return value.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;

      } else {
        return -1;
      }
    });
  }

}
