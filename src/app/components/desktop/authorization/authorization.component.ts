import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { ConfigService, ErrorService } from 'app/services';
import { AccountService } from 'app/services/account';


@Component({
    selector: 'authorization',
    styleUrls: [
        './authorization.component.less'
    ],
    templateUrl: './authorization.component.html'
})
export class AuthorizationComponent {
    private phone: string;
    private password: string;
    private errorMessage: string;

    constructor(
        private config: ConfigService,
        private errorService: ErrorService,
        private translate: TranslateService,
        private accountService: AccountService
    ) {
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
