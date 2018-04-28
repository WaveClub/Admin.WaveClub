import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/modules/shared';

import { DesktopRoutes } from './desktop.routes';

import { DesktopComponent } from 'app/components/desktop';
import { HeaderComponent } from 'app/components/desktop/header/header.component';
import { MenuComponent } from 'app/components/desktop/menu/menu.component';
import { PopUpWarningComponent } from 'app/components/desktop/pop-up-warning/pop-up-warning.component';
import {
    UsersCreateComponent,
    UsersHeaderComponent,
    UsersInfoComponent,
    UsersPageComponent,
    UsersDetailComponent } from 'app/components/desktop/pages/users';

import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        DesktopComponent,
        HeaderComponent,
        MenuComponent,
        PopUpWarningComponent,
        UsersCreateComponent,
        UsersDetailComponent,
        UsersHeaderComponent,
        UsersInfoComponent,
        UsersPageComponent
    ],
    imports: [
        RouterModule.forChild(DesktopRoutes),

        SharedModule,
    ],
    exports: [
        DesktopComponent,
        RouterModule
    ],
    providers: [
    ]
})
export class DesktopModule { }
