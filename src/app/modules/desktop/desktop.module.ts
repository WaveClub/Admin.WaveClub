import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared';

import { DesktopRoutes } from './desktop.routes';

import { DesktopComponent } from 'app/components/desktop';
import { AuthorizationComponent } from 'app/components/desktop/authorization/authorization.component';

@NgModule({
    declarations: [
        AuthorizationComponent,        
        DesktopComponent,
    ],
    imports: [
        RouterModule.forChild(DesktopRoutes),

        SharedModule,
    ],
    exports: [
        AuthorizationComponent,        
        DesktopComponent,
        RouterModule
    ],
    providers: [
    ]
})
export class DesktopModule { }
