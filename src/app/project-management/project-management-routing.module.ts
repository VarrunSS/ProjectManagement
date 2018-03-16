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
            { path: 'users', loadChildren: './user-profile/user-profile.module#UserProfileModule' },
            { path: 'analysis', loadChildren: './user-analysis/user-analysis.module#UserAnalysisModule' },
            { path: 'about', loadChildren: './about-project/about-project.module#AboutProjectModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProjectManagementRoutingModule { }