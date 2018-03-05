import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ConfigService } from 'app/services';

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './app.component.html'
})
export class AppComponent {
    constructor(
        private config: ConfigService,
        private translate: TranslateService
    ) {
        translate.setDefaultLang('en');
        translate.use('en');
    }
}
