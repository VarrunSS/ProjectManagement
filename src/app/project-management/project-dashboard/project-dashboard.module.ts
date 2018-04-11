import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { FormsModule }   from '@angular/forms';

import { ProjectDashboardRoutingModule } from './project-dashboard-routing.module';
import { ProjectDashboardComponent } from './project-dashboard.component';
import { ChartsComponent } from '../components/charts/charts.component';
import { FormComponent } from '../components/form/form.component';
import { ProjectTableComponent } from '../components/table/project-table.component';

@NgModule({
    imports: [
        CommonModule,
        ProjectDashboardRoutingModule,
        Ng2Charts,
        FormsModule
    ],
    exports: [],
    declarations: [
        ProjectDashboardComponent,
        FormComponent,
        ProjectTableComponent,
        ChartsComponent],
    providers: []
})
export class ProjectDashboardModule { }
