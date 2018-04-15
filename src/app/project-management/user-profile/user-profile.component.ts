import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { UserTask } from '../proj-models';
import { DatatableComponent } from '@swimlane/ngx-datatable';



@Component({
    selector: 'user-profile',
    templateUrl: 'user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {
    constructor(
        private _http: Http,
        private _zone: NgZone
    ) { }


    public userTask: UserTask[] = [];
    private _baseUrl = 'http://localhost:5050/';

    ngOnInit() {

        var that = this;

        this._http.get(this._baseUrl + 'api/userTask/').subscribe(result => {
            // that._zone.run(() => {
            that.userTask = result.json() as UserTask[];
            // });
            console.log(that.userTask);

            this.temp = [...that.userTask];
            this.rows = that.userTask;
            setTimeout(() => { this.loadingIndicator = false; }, 1500);
        }, error => console.error(error));
    }


    temp = [];
    rows = [];
    loadingIndicator: boolean = true;
    reorderable: boolean = true;

    columns = [
        // { prop: 'id' },
        // { name: 'designation', sortable: false },
        // { name: 'experience' },
        { prop: 'name', name: 'Name', width: 200 },
        { prop: 'team', name: 'Team', width: 75 },
        { prop: 'taskType', name: 'Task Type', width: 75 },
        { prop: 'summary', name: 'Summary', width: 500, sortable: false },
        { prop: 'difficulty', name: 'Difficulty', width: 80 },
        { prop: 'completionInDays', name: 'Completion Time', width: 120, cellClass:"centerAlign" }
    ];

    @ViewChild(DatatableComponent) table: DatatableComponent;

    updateFilterData(event) {
        const val = event.target.value.toLowerCase();
    
        // filter our data
        const temp = this.temp.filter(function(d) {
          return (d.summary.toLowerCase().indexOf(val) !== -1 
          || d.name.toLowerCase().indexOf(val) !== -1 
          || d.difficulty.toLowerCase().indexOf(val) !== -1 
          || d.completionInDays.toString().indexOf(val) !== -1 
          || !val);
        });
    
        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
      }

    // constructor() {
    //     this.fetch((data) => {
    //         this.rows = data;
    //         setTimeout(() => { this.loadingIndicator = false; }, 1500);
    //     });
    // }
}