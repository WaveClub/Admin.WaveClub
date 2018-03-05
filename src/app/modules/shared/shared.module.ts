import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TranslateModule } from '@ngx-translate/core';

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
    ]
})
export class SharedModule {
}
