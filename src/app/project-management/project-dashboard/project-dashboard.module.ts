import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectDashboardRoutingModule } from './project-dashboard-routing.module';
import { ProjectDashboardComponent } from './project-dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        ProjectDashboardRoutingModule
    ],
    exports: [],
    declarations: [ProjectDashboardComponent],
    providers: []
})
export class ProjectDashboardModule { }
