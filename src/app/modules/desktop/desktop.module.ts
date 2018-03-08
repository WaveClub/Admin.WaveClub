import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/modules/shared';

import { DesktopRoutes } from './desktop.routes';

import { DesktopComponent } from 'app/components/desktop';

import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        DesktopComponent,
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
