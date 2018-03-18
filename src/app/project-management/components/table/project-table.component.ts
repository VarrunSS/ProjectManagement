import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
    selector: 'proj-table',
    templateUrl: 'project-table.component.html',
    styleUrls: ['./project-table.component.scss'],
    animations: [routerTransition()]
})

export class ProjectTableComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
