import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutProjectComponent } from './about-project.component';

const routes: Routes = [
  { path: '', component: AboutProjectComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutProjectRoutingModule { }
