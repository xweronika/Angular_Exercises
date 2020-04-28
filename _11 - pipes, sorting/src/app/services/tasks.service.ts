import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task';


@Injectable()
export class TasksService {

    private tasksList: Array<Task> = [];
    private doneList: Array<Task> = [];

    private taskListObs = new BehaviorSubject([]); // serwisy
    // żeby inni mogi to subskrybować, tutaj to 'wypychamy'
    private taskDoneObs = new BehaviorSubject([]); // serwisy


    constructor() {
        this.tasksList = [
            { name: 'Sprzątanie', created: new Date() },
            { name: 'Nauka', created: new Date() },
            { name: 'Podlewanie', created: new Date() },
            { name: 'Zakupy', created: new Date() }];
        this.taskListObs.next(this.tasksList); // serwisy
    }

    add(task: Task) {
        this.tasksList.push(task);
        this.taskListObs.next(this.tasksList); // serwisy
    }

    remove(task: Task) {
        this.tasksList = this.tasksList.filter(e => e !== task); // jesli spotka ten task to go usunie a reszte zostawi
        // z reszty zostanie stworzona nowa tablica, której wartość aktualizujemy
        this.taskListObs.next(this.tasksList);  // serwisy
        // usunelismy cos z listy to nowa lista zostanie wyemitowana
    }
    done(task: Task) {

        // też działa
        this.doneList.push(task);
        // this.tasksList = this.tasksList.filter(e => e !== task);
        this.remove(task);
        this.taskDoneObs.next(this.doneList);  // serwisy

    }

    getTasksListObs(): Observable<Array<Task>> {
        return this.taskListObs.asObservable();
    }

    getTasksDoneObs(): Observable<Array<Task>> {
        return this.taskDoneObs.asObservable();
    }
}
