import { Injectable } from '@angular/core';


@Injectable() // dzięki temu można tutaj wstrzyknąć inny serwis
export class LogService {

    logger(log: string) {
        console.log(log);
    }

}
