import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared';

import { MobileRoutes } from './mobile.routes';

import { MobileComponent } from 'app/components/mobile';

@NgModule({
    declarations: [
        MobileComponent
    ],
    imports: [
        RouterModule.forChild(MobileRoutes),
        SharedModule
    ],
    exports: [
        MobileComponent,
        RouterModule
    ],
    providers: [
    ]
})
export class MobileModule { }
