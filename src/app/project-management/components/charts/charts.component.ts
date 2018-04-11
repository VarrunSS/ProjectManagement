import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { TaskOutput, Employee } from '../../proj-models';
import { Http } from '@angular/http';

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

    public pieChartType: string = 'pie';
    public pieChartLabels: string[] = [];
    public pieChartData: number[] = [];

    private data: any;

    private _baseUrl = 'http://localhost:5050/';

    constructor(private _http: Http) { }

    ngOnInit() {

        console.log(this.taskOutput);
        if (this.taskOutput != undefined && this.taskOutput.employees.length > 0) {
            this.taskOutput.employees.forEach(emp => {
                this.pieChartLabels.push(emp.id);
                this.pieChartData.push(emp.suitable);
            });
        }
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


        this._http.get(this._baseUrl + 'api/Values/').subscribe(result => {
            this.data = result.json() as Employee[];

            // Update final output - taskOutput
            this.taskOutput.employees.forEach(v => {
                let objIndex = this.data.findIndex((x => x.id == v.id));
                let target = this.data[objIndex];

                v.name = target.name;
                v.designation = target.designation;
                v.experience = target.experience;
            });

            this._getTimeDuration(0);
            console.log(this.taskOutput);
        }, error => console.error(error));


    }

    private _getTimeDuration(ind: number) {
        let emp: Employee = this.taskOutput.employees[ind];
        if (true) {
            // call gpai here

            let random: number = Math.random() * 1000;
            let no: number = Math.ceil(random) % 10;
            this.taskOutput.employees[ind].days = no;

            ind++;
            if (ind == this.taskOutput.employees.length) {
                console.log('Time duration completed.')
            }
            else {
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
