import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { GoogleApiService } from '../../shared/services/index'


@Component({
    selector: 'app-project-dashboard',
    templateUrl: 'project-dashboard.component.html',
    styleUrls: ['./project-dashboard.component.scss'],
    animations: [routerTransition()]
})

export class ProjectDashboardComponent implements OnInit {
    constructor(private _googleApiService: GoogleApiService) {

    }

    googleSignIn(e) {
        this._googleApiService.handleSignInClick(e);
    }

    googleSignOut(e) {
        this._googleApiService.handleSignOutClick(e);
    }

    ngOnInit() { }
}