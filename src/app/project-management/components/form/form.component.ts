import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'proj-form',
    templateUrl: 'form.component.html'
})

export class FormComponent implements OnInit {
    
    public displayCharts : boolean = false;

    constructor() { }

    ngOnInit() { }

    public findData(): void {
        console.log('find it!')
        this.displayCharts = true;
    }
}