import { Component, OnInit, Input } from '@angular/core';
import { TeamPerformance } from '../../proj-models';

@Component({
    selector: 'app-analysis-table',
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit {
    @Input() teamPerformance: TeamPerformance[];

    constructor() { }

    ngOnInit() { }

}
