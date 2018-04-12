import { Injectable } from '@angular/core';

declare var gapi: any;


@Injectable()
export class DataService {

    constructor() { }

    sampleTest() {
        return "test";
    }

}