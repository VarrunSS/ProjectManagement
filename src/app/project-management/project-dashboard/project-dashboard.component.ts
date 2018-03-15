import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-project-dashboard',
    templateUrl: 'project-dashboard.component.html',
    styleUrls: ['./project-dashboard.component.scss'],
    animations: [routerTransition()]
})

export class ProjectDashboardComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}