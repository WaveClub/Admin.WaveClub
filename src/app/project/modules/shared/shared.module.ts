import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MomentModule } from 'angular2-moment';
import { TranslateModule } from '@ngx-translate/core';

import 'moment/min/locales.min';
import { NoContentComponent } from '../../../components/shared/pages/no-content';



@NgModule({
    declarations: [
        // components
        NoContentComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,

        MomentModule,
        TranslateModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        MomentModule,
        TranslateModule,

        NoContentComponent
    ],
    providers: [
    ]
})
export class SharedModule {
}
