import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { ProjectManagementRoutingModule } from './project-management-routing.module';
import { ProjectManagementComponent } from './project-management.component';
import { HeaderComponent } from './components/header/header.component';
import { ChartsModule } from './charts/charts.module';

@NgModule({
    imports: [
        CommonModule,
        ProjectManagementRoutingModule,
        TranslateModule,
        NgbDropdownModule.forRoot()
    ],
    declarations: [
        ProjectManagementComponent,
        HeaderComponent,
        ChartsModule
    ]
})

export class ProjectManagementModule { }