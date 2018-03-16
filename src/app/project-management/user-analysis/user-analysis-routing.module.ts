import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAnalysisComponent } from './user-analysis.component';

const routes: Routes = [
  { path: '', component: UserAnalysisComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAnalysisRoutingModule { }
