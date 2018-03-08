import { Component, OnDestroy } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { ConfigService, ErrorService, AppState } from 'app/services';
import { AccountService } from 'app/services/account';

@Component({
    selector: 'authorization',
    styleUrls: [
        './authorization.component.less'
    ],
    templateUrl: './authorization.component.html'
})
export class AuthorizationComponent implements OnDestroy {
    public phone: string; // /^\+?\d{1}[- ]?\d{3}[- ]?\d{7}$/
    public password: string;
    public errorMessage: string;

    private isMobile: boolean;
    public eventPressEnter;

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

    public login() {
        if (this.checkCredentials()) {
            this.accountService.authorization(this.phone, this.password)
                .subscribe((status) => console.log(status), this.errorMessage = undefined);
        }
    }

    public phoneValidation(event) {
        let value = event.target.value;
        let key = event.key;

        if (!isNaN(key) && key >= '0' && key <= '9') {

            switch (value.length) {
                case 1: 
                    this.phone += ' (';
                    break;
                case 6:
                    this.phone += ') ';
                    break;
                case 11:
                    this.phone += ' - ';
                    break;
                case 18:
                    return false;
            }

            return true;
        }

        return false;
    }

    private pressEnter(event) {
        if (event.key === "Enter") {
            this.login();
        }
    }

    private checkCredentials(): boolean {
        if (!this.phone || !this.password) {
            this.errorMessage = this.translate.instant(this.config.app.errors.noPhoneOrPass);  
            return false;          
        }

        if (this.phone.length < 18) {
            this.errorMessage = this.translate.instant(this.config.app.errors.incorrectPhone);
            return false;
        }

        return true;
    }
}
