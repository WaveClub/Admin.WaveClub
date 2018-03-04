import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';

import { DesktopRoutes } from './desktop.routes';
import { DesktopComponent } from '../../../components/desktop/desktop.component';


@NgModule({
    declarations: [
        DesktopComponent
    ],
    imports: [
        RouterModule.forChild(DesktopRoutes),
        SharedModule
    ],
    exports: [
        DesktopComponent,
        RouterModule
    ],
    providers: [
    ]
})
export class DesktopModule { }
