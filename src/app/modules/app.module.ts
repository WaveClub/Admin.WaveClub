import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { environment } from 'environments/environment.prod';

import { AppRoutingModule } from './routing';

// services
import { AppState } from 'app/services/app.service';
import { ConfigService } from 'app/services';

// components
import { AppComponent } from 'app/components/app.component';

import 'styles/style.less';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        environment.ENV_PROVIDERS,
        AppState,
        ConfigService,
        {
            provide: APP_INITIALIZER,
            useFactory: (configService: ConfigService) => () => configService.loadConfigs(),
            deps: [ConfigService],
            multi: true
        }
    ]
})
export class AppModule {
}
