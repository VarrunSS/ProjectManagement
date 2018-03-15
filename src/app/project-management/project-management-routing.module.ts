import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectManagementComponent } from './project-management.component';

const routes: Routes = [
    {
        path: '',
        component: ProjectManagementComponent,
        children: [
            { path: '', redirectTo: 'dashboard'},
            { path: 'dashboard', loadChildren: './project-dashboard/project-dashboard.module#ProjectDashboardModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProjectManagementRoutingModule { }