import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAnalysisRoutingModule } from './user-analysis-routing.module';
import { UserAnalysisComponent } from './user-analysis.component';

@NgModule({
    imports: [
        CommonModule,
        UserAnalysisRoutingModule
    ],
    exports: [],
    declarations: [UserAnalysisComponent],
    providers: [],
})
export class UserAnalysisModule { }
