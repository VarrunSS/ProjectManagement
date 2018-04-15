import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
    imports: [
        CommonModule,
        UserProfileRoutingModule,
        NgxDatatableModule
    ],
    exports: [],
    declarations: [UserProfileComponent],
    providers: [],
})
export class UserProfileModule { }