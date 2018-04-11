import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { TaskDetail } from '../../proj-models';

@Component({
    selector: 'proj-table',
    templateUrl: 'project-table.component.html',
    styleUrls: ['./project-table.component.scss'],
    animations: [routerTransition()]
})

export class ProjectTableComponent implements OnInit {
    @Input() projectDetail: TaskDetail[] = [];

    constructor() { }

    ngOnInit() {
        
    }
}
