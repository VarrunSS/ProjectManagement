import { Component, OnInit, Input, NgZone } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { TaskOutput, Employee, TaskDetail } from '../../proj-models';
import { Http } from '@angular/http';


declare var gapi: any;


@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})

export class ChartsComponent implements OnInit {
    @Input() taskOutput: TaskOutput;

    public showDetails: Boolean = false;
    public detailsFetched: Boolean = false;
    public allEmployeeInformation: Employee[] = [];

    public pieChartType: string = 'pie';
    public pieChartLabels: string[] = [];
    public pieChartData: number[] = [];

    // private data: any;

    private _baseUrl = 'http://localhost:5050/';

    constructor(
        private _http: Http,
        private _zone: NgZone
    ) { }

    ngOnInit() {

        console.log(this.taskOutput);
        if (this.taskOutput != undefined && this.taskOutput.employees.length > 0) {
            this.taskOutput.employees.forEach(emp => {
                this.pieChartLabels.push(emp.id);
                this.pieChartData.push(emp.suitable);
            });
        }

        this._http.get(this._baseUrl + 'api/employee/').subscribe(result => {
            this.allEmployeeInformation = result.json() as Employee[];
        }, error => console.error(error));

    }

    public displayDetails(): void {
        this.showDetails = !(this.showDetails);

        if (!this.detailsFetched) {
            this._getAssociateDetails();
            this.detailsFetched = true;
        }
    }

    private _getAssociateDetails() {
        console.log('clicked')
        console.log(this.taskOutput.employees)

        // this._http.get(this._baseUrl + 'api/employee/').subscribe(result => {
        //     this.data = result.json() as Employee[];

            // Update final output - taskOutput
            this.taskOutput.employees.forEach(v => {
                let objIndex = this.allEmployeeInformation.findIndex((x => x.id == v.id));
                let target = this.allEmployeeInformation[objIndex];

                v.name = target.name;
                v.designation = target.designation;
                v.experience = target.experience;
            });

            this._getTimeDuration(0);
        //     console.log(this.taskOutput);
        // }, error => console.error(error));


    }

    private _getTimeDuration(ind: number) {
        let emp: Employee = this.taskOutput.employees[ind];
        let detail: TaskDetail = this.taskOutput.taskDetail;

        const input = [];
        input.push(detail.task);
        input.push(detail.team);
        input.push(detail.summary);
        input.push(detail.difficulty);
        input.push(emp.id);

        var that = this;

        if (true) {
            // call gpai here
            gapi.client.prediction.trainedmodels.predict({
                project: 'varrun-195612',
                id: 'jira_time_revised',
                input: {
                    csvInstance: input
                }
            }).then(function (response) {
                console.log(response);

                that._zone.run(() => {

                    let days = response.result.outputLabel;
                    this.taskOutput.employees[ind].days = days;

                    ind++;
                    if (ind == this.taskOutput.employees.length) {
                        console.log('Time duration completed.')
                    } else {
                        that._getTimeDuration(ind);
                    }
                });

            }, function (reason) {
                console.log('Error: ' + reason.result.error.message);
            });
        }

    }

    private _getDummyTimeDuration(ind: number) {
        let emp: Employee = this.taskOutput.employees[ind];
        if (true) {
            // call gpai here

            let random: number = Math.random() * 1000;
            let no: number = Math.ceil(random) % 10;
            this.taskOutput.employees[ind].days = no;

            ind++;
            if (ind == this.taskOutput.employees.length) {
                console.log('Time duration completed.')
            } else {
                this._getTimeDuration(ind);
            }

        }
    }



    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

}
