import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TranslateModule } from '@ngx-translate/core';
import { ApiService, ErrorService } from 'app/services';
import { AccountService } from 'app/services/account';

@NgModule({
    declarations: [
    ],
    imports: [
        // BrowserModule,
        CommonModule,
        FormsModule,
        HttpClientModule,

        TranslateModule
    ],
    exports: [
        CommonModule,
        FormsModule,
    ],
    providers: [
        AccountService,
        ApiService,
        ErrorService
    ]
})
export class SharedModule {
}
