import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';

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
        translate.setDefaultLang(config.app.defaultLanguage || 'en');
		translate.use(localStorage.getItem(config.app.localStorageKey.language) || config.app.defaultLanguage || 'en');
        
        translate.onLangChange.subscribe((langEvent) => moment.locale(langEvent.lang));
    }
}
