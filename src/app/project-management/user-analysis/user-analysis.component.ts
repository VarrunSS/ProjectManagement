import { Component, OnInit, NgZone } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Http } from '@angular/http';
import { TeamPerformance } from '../proj-models';


@Component({
    selector: 'user-analysis',
    templateUrl: 'user-analysis.component.html',
    animations: [routerTransition()]
})

export class UserAnalysisComponent implements OnInit {
    constructor(
        private _http: Http,
        private _zone: NgZone
    ) { }

    public teamPerformance: TeamPerformance[] = [];
    private _baseUrl = 'http://localhost:5050/';


    ngOnInit() {

        var that = this;

        this._http.get(this._baseUrl + 'api/performance/').subscribe(result => {
            that._zone.run(() => {
                that.teamPerformance = result.json() as TeamPerformance[];
            });
            console.log(that.teamPerformance);
        }, error => console.error(error));
    }
}
