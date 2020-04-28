import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class TasksService {

    private tasksList: Array<string> = [];
    private doneList: Array<string> = [];

    private taskListObs = new BehaviorSubject([]); // serwisy
    // żeby inni mogi to subskrybować, tutaj to 'wypychamy'
    private taskDoneObs = new BehaviorSubject([]); // serwisy


    constructor() {
        this.tasksList = ['Sprzątanie', 'Nauka', 'Podlewanie', 'Zakupy'];
        this.taskListObs.next(this.tasksList); // serwisy
    }

    add(task) {
        this.tasksList.push(task);
        this.taskListObs.next(this.tasksList); // serwisy
    }

    remove(task) {
        this.tasksList = this.tasksList.filter(e => e !== task); // jesli spotka ten task to go usunie a reszte zostawi
        // z reszty zostanie stworzona nowa tablica, której wartość aktualizujemy
        this.taskListObs.next(this.tasksList);  // serwisy
        // usunelismy cos z listy to nowa lista zostanie wyemitowana
    }
    done(task) {

        // też działa
        this.doneList.push(task);
        // this.tasksList = this.tasksList.filter(e => e !== task);
        this.remove(task);
        this.taskDoneObs.next(this.doneList);  // serwisy

    }

    getTasksListObs(): Observable<Array<string>> {
        return this.taskListObs.asObservable();
    }

    getTasksDoneObs(): Observable<Array<string>> {
        return this.taskDoneObs.asObservable();
    }
}
