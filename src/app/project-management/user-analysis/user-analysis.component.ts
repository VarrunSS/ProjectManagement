import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'user-analysis',
    templateUrl: 'user-analysis.component.html',
    animations: [routerTransition()]
})

export class UserAnalysisComponent implements OnInit {
    constructor() { }



    ngOnInit() { }
}
