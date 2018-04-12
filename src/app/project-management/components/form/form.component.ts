import { Component, OnInit } from '@angular/core';
import { Employee, TaskDetail, TaskOutput } from '../../proj-models/index';

import { GoogleApiService } from '../../../shared/services/index';


declare var gapi: any;


@Component({
    selector: 'proj-form',
    templateUrl: 'form.component.html',
    styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

    public displayTable: Boolean = false;
    public displayCharts: Boolean = false;

    constructor(
        private _googleApi: GoogleApiService
        
    ) {

    }

    ngOnInit() {
        this._googleApi.handleClientLoad();
    }

    // Dropdown Inputs
    public tasks = ["Task", "Bug"];
    public teams = ["Select a Team", "PD Team", "UX Team", "DB Team"];
    public difficulties = ["Easy", "Medium", "Hard"];

    public defaultValue: TaskDetail = new TaskDetail('', this.teams[0], '', '');

    public model: TaskDetail = Object.create(this.defaultValue);
    public projectDetail: TaskDetail[] = [];
    public result: TaskOutput[] = [];

    public addToTable(): void {

        this.projectDetail.push(this.model);
        this.model = Object.create(this.defaultValue);
        console.log(this.projectDetail);

        this.displayTable = true;
        this.displayCharts = false;

    }

    public findData(): void {
        console.log('find it!');
        // this.displayCharts = true;
        this.result = [];

        // this.predictAssignee(0);
        this._dummyPredict(0);
    }

    private predictAssignee(ind: number) {

        // Call gapi function and get the output
        let task: TaskDetail = this.projectDetail[ind];

        let output: TaskOutput = new TaskOutput();
        output.taskDetail = task;

        if (true) {
            gapi.client.prediction.trainedmodels.predict({
                project: 'varrun-195612',
                id: 'resource-identifier',
                input: {
                    csvInstance:
                        [
                            "Task",
                            "INT",
                            "Weekly Attach Check-In",
                            "Medium"
                        ]
                }
            }).then(function (response) {

                let best = response.result.outputLabel;

                // todo: get top 3 employees
                let emp: Employee = {
                    id: best,
                    suitable: 1
                }
                output.employees.push(emp);
                // todo: end

                this.result.push(output);

                ind++;
                if (ind == this.projectDetail.length) {
                    this.buildChart();
                }
                else {
                    this.Predict(ind);
                }
            }, function (reason) {
                console.log('Error: ' + reason.result.error.message);
            });
        }
    }

    private _dummyPredict(ind: number): any {
        let task: TaskDetail = this.projectDetail[ind];
        let employees: string[] = ["Dhoni", "Varun", "Raina", "Koli", "Sachin"];

        let output: TaskOutput = new TaskOutput();
        output.taskDetail = task;

        if (true) {
            for (let i: number = 0; i < 3; i++) {
                let random: number = Math.random() * 1000;
                let no: number = Math.ceil(random) % 5;

                let emp: Employee = {
                    id: employees[no],
                    suitable: no * 5
                }
                output.employees.push(emp);
            }
            this.result.push(output);

            ind++;
            if (ind == this.projectDetail.length) {
                this.buildChart();
            }
            else {
                this._dummyPredict(ind);
            }
        }

    }

    private buildChart() {
        console.log('chart data');
        console.log(this.result);


        this.displayCharts = true;
    }

}
