import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'proj-form',
    templateUrl: 'form.component.html',
    styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

    public displayTable: Boolean = false;
    public displayCharts: Boolean = false;

    constructor() { }

    ngOnInit() { }

    public addToTable(): void {
        this.displayTable = true;
        this.displayCharts = false;
    }

    public findData(): void {
        console.log('find it!');
        this.displayCharts = true;
    }
}
