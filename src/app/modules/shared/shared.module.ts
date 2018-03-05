import { NgModule } from '@angular/core';
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
        CommonModule,
        FormsModule,
        HttpClientModule,

        TranslateModule
    ],
    exports: [
    ],
    providers: [
        AccountService,
        ApiService,
        ErrorService
    ]
})
export class SharedModule {
}
