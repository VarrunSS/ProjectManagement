import { Component, OnInit, Input } from '@angular/core';
import { TeamPerformance } from '../../proj-models';

@Component({
    selector: 'app-analysis-charts',
    templateUrl: 'charts.component.html',
    styleUrls: ['./charts.component.scss']
})

export class ChartsComponent implements OnInit {
    @Input() teamPerformance: TeamPerformance[];

    public displayChart: boolean = false;

    constructor(
    ) { }

    ngOnChanges() {
        this._populateChartData();
    }

    ngOnInit() {

    }

    private _populateChartData() {
        this.teamPerformance.forEach((elem, ind) => {
            let points = {
                data: [],
                label: elem.teamName
            }

            const randomValue = [0.18, 0.25, 0.38, 0.19];
            points.data.push(randomValue[(0 + ind) % 4] * elem.totalTaskCompleted);
            points.data.push(randomValue[(1 + ind) % 4] * elem.totalTaskCompleted);
            points.data.push(randomValue[(2 + ind) % 4] * elem.totalTaskCompleted);
            points.data.push(randomValue[(3 + ind) % 4] * elem.totalTaskCompleted);

            // Display only top 3 teams.
            if (ind < 3) {
                this.lineChartData.push(points);
            }
            this.displayChart = true;
        });

        console.log(this.lineChartData)
    }

    public displayDetails(): void {

    }

    // lineChart
    public lineChartData: Array<any> = [];
    public lineChartLabels: Array<any> = [
        'Quarter 1',
        'Quarter 2',
        'Quarter 3',
        'Quarter 4'
    ];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        {
            // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

}
