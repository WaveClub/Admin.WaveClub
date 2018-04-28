import { Component, OnDestroy, Output, EventEmitter } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { ConfigService, ObservableService, AppState } from 'app/services';
import { AccountService } from 'app/services/account';

@Component({
    selector: 'authorization',
    styleUrls: [
        './authorization.component.less'
    ],
    templateUrl: './authorization.component.html'
})
export class AuthorizationComponent implements OnDestroy {
    @Output() public onAuthorization = new EventEmitter();

    public phone: string;
    public password: string;

    private isMobile: boolean;
    private eventPressEnter;

    constructor(
        protected appState: AppState,
        protected config: ConfigService,
        protected observableService: ObservableService,
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
            this.accountService.authorization(this.phone.replace(/[^0-9]/gim, ''), this.password)
                .subscribe((status) => {
                    if (status) {
                        this.onAuthorization.emit();
                    }
                });
        }
    }

    public phoneValidation(event) {
        const value = event.target.value;
        const key = event.key;

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
        if (event.key === 'Enter') {
            this.login();
        }
    }

    private checkCredentials(): boolean {
        if (!this.phone || !this.password) {
            this.observableService.errorMessage = this.translate.instant(this.config.app.errors.noPhoneOrPass);
            return false;
        }

        if (this.phone.length < 18) {
            this.observableService.errorMessage = this.translate.instant(this.config.app.errors.incorrectPhone);
            return false;
        }

        return true;
    }
}
