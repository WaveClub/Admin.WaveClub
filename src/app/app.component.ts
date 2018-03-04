import { Component } from '@angular/core';
import { ConfigService } from './services/config.service';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { AppState } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
	public css: string;

	constructor(
		private appState: AppState,
        private config: ConfigService,
        private translate: TranslateService
	) {
		appState.onViewChange.subscribe((state) => this.css = state.css);
		
		translate.setDefaultLang(config.app.defaultLanguage || 'en');
		translate.use(localStorage.getItem(config.app.localStorageKey.language) || config.app.defaultLanguage || 'en');
		
		translate.onLangChange.subscribe((langEvent) => moment.locale(langEvent.lang));
	}
}
