import { OnDestroy } from '@angular/core';

import { AccountService } from 'app/services/account';
import { ConfigService, ErrorService, AppState } from 'app/services';

import { TranslateService } from '@ngx-translate/core';

export class AuthorizationBaseComponent implements OnDestroy {
    public phone: string; // /^\+?\d{1}[- ]?\d{3}[- ]?\d{7}$/
    public password: string;
    public errorMessage: string;

    private isMobile: boolean;
    private eventPressEnter;

    constructor(
        protected appState: AppState,
        protected config: ConfigService,
        protected errorService: ErrorService,
        protected translate: TranslateService,
        protected accountService: AccountService
    ) {
        this.isMobile = appState.state === appState.STATE.MOBILE;
        this.eventPressEnter = this.pressEnter.bind(this);

        if (!this.isMobile) {
            window.addEventListener('keypress', this.eventPressEnter);
        }
    }

    public ngOnDestroy() {
        window.removeEventListener('keypress', this.eventPressEnter);
    }

    private pressEnter(value) {
        console.log(value);
    }

    private login() {
        if (!this.checkCredentials) {
            this.errorMessage = this.translate.instant(this.config.app.errors.noNameOrPass);
            return;
        }
        this.accountService.authorization(this.phone, this.password)
            .subscribe((status) => console.log(status));
    }

    private checkCredentials(): boolean {
        return !!this.phone && !!this.password;
    }
}
