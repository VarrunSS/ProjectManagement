import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

import { ProjectManagementRoutingModule } from './project-management-routing.module';
import { ProjectManagementComponent } from './project-management.component';
import { HeaderComponent } from './components/header/header.component';

import { GoogleApiService } from '../shared/services/index';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        ProjectManagementRoutingModule,
        TranslateModule,
        NgbDropdownModule.forRoot(),

    ],
    declarations: [
        ProjectManagementComponent,
        HeaderComponent
    ],
    providers: [GoogleApiService]
})

export class ProjectManagementModule { }