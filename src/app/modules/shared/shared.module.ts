import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { TranslateModule } from '@ngx-translate/core';
import { ApiService, ObservableService, MyHttpInterceptor } from 'app/services';
import { AccountService } from 'app/services/account';

import { AuthorizationComponent } from 'app/components/shared/authorization/authorization.component';
import { ToggleSwitchComponent } from 'app/components/shared/other/toggle-switch/toggle-switch.component';

import { SearchUsersPipe } from 'app/pipes/search-users.pipe';

@NgModule({
    declarations: [
        // Components
        AuthorizationComponent,
        ToggleSwitchComponent,

        // Pipes
        SearchUsersPipe
    ],
    imports: [
        // BrowserModule,
        CommonModule,
        FormsModule,
        HttpClientModule,

        TranslateModule
    ],
    exports: [
        // Components
        AuthorizationComponent,
        ToggleSwitchComponent,

        // Modules
        CommonModule,
        FormsModule,

        // Pipes
        SearchUsersPipe
    ],
    providers: [
        AccountService,
        ApiService,
        ObservableService,

        {
            provide: HTTP_INTERCEPTORS,
            useClass: MyHttpInterceptor,
            multi: true
        }
    ]
})
export class SharedModule {
}
