import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { UserAnalysisRoutingModule } from './user-analysis-routing.module';
import { UserAnalysisComponent } from './user-analysis.component';
import { ChartsComponent } from './charts/charts.component';
import { TableComponent } from './table/table.component';


@NgModule({
    imports: [
        CommonModule,
        UserAnalysisRoutingModule,
        Ng2Charts
    ],
    exports: [],
    declarations: [
        UserAnalysisComponent,
        ChartsComponent,
        TableComponent
        ],
    providers: [],
})
export class UserAnalysisModule { }
