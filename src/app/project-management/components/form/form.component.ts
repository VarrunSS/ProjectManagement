import { Component, OnInit, NgZone } from '@angular/core';
import { Employee, TaskDetail, TaskOutput } from '../../proj-models/index';

import { GoogleApiService } from '../../../shared/services/index';
import { Http } from '@angular/http';


declare var gapi: any;


@Component({
    selector: 'proj-form',
    templateUrl: 'form.component.html',
    styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

    public displayTable: Boolean = false;
    public displayCharts: Boolean = false;
    public allEmployeeInformation: Employee[] = [];

    private _baseUrl = 'http://localhost:5050/';

    constructor(
        private _http: Http,
        private _googleApi: GoogleApiService,
        private _zone: NgZone,

    ) {

    }

    ngOnInit() {
        this._googleApi.handleClientLoad();

        this._http.get(this._baseUrl + 'api/employee/').subscribe(result => {
            this.allEmployeeInformation = result.json() as Employee[];
        }, error => console.error(error));

    }

    // Dropdown Inputs
    public tasks = ["Task", "Bug"];
    public teams = ["Select a Team", "DI", "INT", "MSTR", "RDG", "UIUX"];
    public difficulties = ["Easy", "Medium", "Hard"];

    public defaultValue: TaskDetail = new TaskDetail('Task', this.teams[0], 'some summary', 'Easy');

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

        this.predictAssignee(0);
        // this._dummyPredictAssignee(0);
    }

    private predictAssignee(ind: number) {

        // Call gapi function and get the output
        let detail: TaskDetail = this.projectDetail[ind];

        let output: TaskOutput = new TaskOutput();
        output.taskDetail = detail;

        const input = [];
        input.push(detail.task);
        input.push(detail.team);
        input.push(detail.summary.toLowerCase());
        input.push(detail.difficulty);

        console.log(input);

        var that = this;

        if (true) {
            gapi.client.prediction.trainedmodels.predict({
                project: 'varrun-195612',
                id: 'jira_resource_revised',
                input: {
                    csvInstance:
                        input
                    // [
                    //     "Task",
                    //     "INT",
                    //     "Weekly Attach Check-In",
                    //     "Medium"
                    // ]
                }
            }).then(function (response) {
                console.log(response);

                that._zone.run(() => {

                    output = that.computeTopEmployees(response, output, detail.team);

                    that.result.push(output);

                    ind++;
                    if (ind == that.projectDetail.length) {
                        that.buildChart();
                    }
                    else {
                        that.predictAssignee(ind);
                    }
                });

            }, function (reason) {
                console.log('Error: ' + reason.result.error.message);
            });
        }
    }

    private _dummyPredictAssignee(ind: number): any {
        let detail: TaskDetail = this.projectDetail[ind];
        let employees: string[] = ["Dhoni", "Varun", "Raina", "Koli", "Sachin"];

        let output: TaskOutput = new TaskOutput();
        output.taskDetail = detail;

        const input = [];
        input.push(detail.task);
        input.push(detail.task);
        input.push(detail.summary);
        input.push(detail.difficulty);

        console.log(input);


        if (true) {
            var responseJSON = '{"result":{"kind":"prediction#output","id":"resource-identifier","selfLink":"https://www.googleapis.com/prediction/v1.6/projects/varrun-195612/trainedmodels/resource-identifier/predict","outputLabel":"Habeeb.Mohamed","outputMulti":[{"label":"lee.ingram","score":"0.006413"},{"label":"Vanya.Stegner","score":"0.007190"},{"label":"Bharathidasan.Pushpanathan","score":"0.010941"},{"label":"eric.bies","score":"0.006597"},{"label":"Philip.Sempels","score":"0.010374"},{"label":"andrew.cossentine","score":"0.007168"},{"label":"Andrew.Don","score":"0.004774"},{"label":"BIConsultantsWF","score":"0.005956"},{"label":"BICChennaiProject","score":"0.010442"},{"label":"Denise.Baik","score":"0.010895"},{"label":"Pravinkumar.Gnanasekaran","score":"0.004138"},{"label":"RachelleAnn.Tabunar","score":"0.010553"},{"label":"JohnTonichi.Tiongson","score":"0.003414"},{"label":"Krishna.Reddy","score":"0.002571"},{"label":"Carmen.Schaefer","score":"0.008495"},{"label":"Jose.Capili","score":"0.008261"},{"label":"Habeeb.Mohamed","score":"0.013838"},{"label":"NOT ASSIGNED","score":"0.009847"},{"label":"JohnCezar.Mariano","score":"0.011058"},{"label":"Dhashinamoorthy.Devarajan","score":"0.002370"},{"label":"RamilMatthew.Mejala","score":"0.003351"},{"label":"Joyce.xu","score":"0.005966"},{"label":"Sathishkumar.Subramanian","score":"0.003238"},{"label":"Yizhen.Jia","score":"0.006287"},{"label":"Maria.Peterson","score":"0.012839"},{"label":"Basker.Jayachandran","score":"0.009312"},{"label":"Haoan.Liu","score":"0.009296"},{"label":"yuling.wang","score":"0.010626"},{"label":"Caitlyn.Stevens","score":"0.005360"},{"label":"Mudassir.Zubair","score":"0.004356"},{"label":"diane.medellin","score":"0.005419"},{"label":"andrew.hazlewood","score":"0.006995"},{"label":"Himanshu.Sachan","score":"0.008526"},{"label":"Ganesh.Ravindran","score":"0.009307"},{"label":"Premanand.Manikavel","score":"0.011056"},{"label":"Jhonar.Soto","score":"0.011012"},{"label":"Anton.Bozhilov","score":"0.007987"},{"label":"nagaprabu.krishnaraj","score":"0.009226"},{"label":"mounica.arcot","score":"0.007622"},{"label":"BICMRChennai","score":"0.003417"},{"label":"Naveenraj.Palanisamy","score":"0.007654"},{"label":"Leonardo.Luiz","score":"0.004415"},{"label":"Amitesh.Kumar","score":"0.012482"},{"label":"BICProgramLeads","score":"0.011772"},{"label":"premanand.manickavell","score":"0.006145"},{"label":"david.cho","score":"0.004353"},{"label":"Sugan.Devarajan","score":"0.003256"},{"label":"Shafi.Syed","score":"0.010454"},{"label":"Dargababu.Chamala","score":"0.012805"},{"label":"Brittany.MacLean","score":"0.011455"},{"label":"Kavitha.Mohan2","score":"0.004238"},{"label":"Sravani.Addanki","score":"0.004033"},{"label":"Ramya.Ponnusamy","score":"0.006138"},{"label":"Durgadevi.Balasubramaniam","score":"0.003330"},{"label":"Theresa.Vu","score":"0.010796"},{"label":"Muthukumaran.Uthiravel","score":"0.004323"},{"label":"Navaneethan.Gopal","score":"0.003608"},{"label":"Mark.Parsons","score":"0.003656"},{"label":"KylaIngrid.Pascasio","score":"0.013255"},{"label":"Pennylaine.Morales","score":"0.008000"},{"label":"Vuong.Tieu","score":"0.011916"},{"label":"Corey.Wasson","score":"0.009224"},{"label":"BICProgramManagers","score":"0.006899"},{"label":"kailai.zhou","score":"0.008931"},{"label":"Jennifer.Ng","score":"0.004974"},{"label":"justin.phan","score":"0.008468"},{"label":"Meggen.Gullo","score":"0.003210"},{"label":"Hellen.Lai","score":"0.011794"},{"label":"tonya.lafontaine","score":"0.011705"},{"label":"Douglas.Herman","score":"0.006734"},{"label":"Kyle.Nakayama","score":"0.008782"},{"label":"heather.connally","score":"0.012022"},{"label":"Jim.Martineau","score":"0.010531"},{"label":"BIAnalyticsWF","score":"0.011964"},{"label":"Sridevi.Pugazhendhi","score":"0.004137"},{"label":"Jhenalyn.Natividad","score":"0.006546"},{"label":"Venkatapradeep.Tatiraju","score":"0.006237"},{"label":"Ganesh.VijayaKumar","score":"0.010804"},{"label":"Arunava.Basak","score":"0.006420"},{"label":"Vidya.Ramachandran","score":"0.006137"},{"label":"xingchen.ling","score":"0.007298"},{"label":"Satishkumar.Vadivelu","score":"0.004417"},{"label":"Shaikabdul.Moinuddin","score":"0.008716"},{"label":"Mahendra.Gaddam","score":"0.006960"},{"label":"Narendran.Mohan","score":"0.010508"},{"label":"Varrun.Selvam","score":"0.010969"},{"label":"Sang.Do","score":"0.011724"},{"label":"Olaf.Menzer","score":"0.007459"},{"label":"Mayank.Modh","score":"0.008238"},{"label":"Roy.Wright","score":"0.008291"},{"label":"haoting.hu","score":"0.009507"},{"label":"Balasubramani.Ramasamy","score":"0.010422"},{"label":"Brett.Lightle","score":"0.005057"},{"label":"martin.phan","score":"0.011483"},{"label":"Carly.Dillon","score":"0.011382"},{"label":"OLDBICProgramLeadsxxxxx","score":"0.011055"},{"label":"nicole.mendoza","score":"0.010909"},{"label":"Chiranjeevi.Pabba","score":"0.003613"},{"label":"rajasekar.lakshimipathi","score":"0.011874"},{"label":"BrightJoel.Dennison","score":"0.004283"},{"label":"janet.rajan","score":"0.006986"},{"label":"Saimanojkumar.Panuganti","score":"0.003380"},{"label":"Sunil.Xavier","score":"0.011650"},{"label":"Samyamoy.AcharyaChoudhuri","score":"0.005453"},{"label":"shubha.rao","score":"0.006738"},{"label":"Divyalakshmi.Manivannan","score":"0.004382"},{"label":"Vijay.Reddy","score":"0.011002"},{"label":"Zachary.McIntosh","score":"0.010527"},{"label":"Rajesh.Ekambaram","score":"0.004976"},{"label":"Karthikeyan.Krishnan","score":"0.003036"},{"label":"admin","score":"0.003744"},{"label":"Liezel.Hequin","score":"0.012867"},{"label":"Olivia.Concepcion","score":"0.010622"},{"label":"Shashikant.Upadhyay","score":"0.004947"},{"label":"Arpitha.Dasari","score":"0.005519"},{"label":"Program.Leads","score":"0.003917"},{"label":"cici.chen","score":"0.013277"},{"label":"Jeanette.Rabacio","score":"0.012763"},{"label":"gholamreza.shojaei","score":"0.003538"},{"label":"Hung.Nguyen","score":"0.008244"},{"label":"Liang.Xu","score":"0.003670"},{"label":"Stacy.Morrow","score":"0.009180"},{"label":"mariano.bolanos","score":"0.011676"},{"label":"bill.phister","score":"0.011884"},{"label":"Sailajanandan.Nayak","score":"0.011504"},{"label":"Saikiran.Reddy","score":"0.010258"}]}}';
            var res = JSON.parse(responseJSON);

            output = this.computeTopEmployees(res, output, detail.team);

            this.result.push(output);

            ind++;
            if (ind == this.projectDetail.length) {
                this.buildChart();
            }
            else {
                this._dummyPredictAssignee(ind);
            }
        }

    }

    public computeTopEmployees(res, output, team) {

        // sort based on score
        var topEmployees = res.result.outputMulti.sort(function (a, b) {
            return (a.score > b.score) ? -1 : ((b.score > a.score) ? 1 : 0);
        });

        topEmployees.forEach(v => {
            let objIndex = this.allEmployeeInformation.findIndex((x => x.id == v.label));
            let target = this.allEmployeeInformation[objIndex];
            if (target == undefined) {
                v.team = '';
            } else {
                v.team = target.team;
            }
        });

        topEmployees = topEmployees.filter((emp) => {
            return (emp.team == team);
        });

        topEmployees = topEmployees.splice(0, 3);

        let sum: number = 0;

        topEmployees.forEach((obj, ind) => {
            let emp: Employee = {
                id: obj.label,
                suitable: parseFloat(obj.score)
            }
            output.employees.push(emp);
        });

        const multiplier = {
            DI: [8.09, 3.66, 1.44],
            INT: [5.23, 3.71, 2.12],
            MSTR: [4.9, 3.45, 1],
            RDG: [3.6, 1.7, 1],
            UIUX: [6.3, 5.2, 1]
        }

        output.employees.forEach((obj, ind) => {

            obj.suitable = obj.suitable * multiplier[team][ind];

            sum += obj.suitable;
        });

        output.employees.forEach((obj, ind) => {
            obj.suitable = obj.suitable * 100 / sum;
        });

        return output;
    }

    private buildChart() {
        console.log('chart data');
        console.log(this.result);

        this.displayCharts = true;
    }

}
