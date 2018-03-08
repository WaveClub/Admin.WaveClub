import { Component, OnDestroy } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { ConfigService, ErrorService, AppState } from 'app/services';
import { AccountService } from 'app/services/account';

import { AuthorizationBaseComponent } from 'app/components/shared';

@Component({
    selector: 'authorization',
    styleUrls: [
        './authorization.component.less'
    ],
    templateUrl: './authorization.component.html'
})
export class AuthorizationComponent extends AuthorizationBaseComponent implements OnDestroy {
    public phone: string;

    constructor(
        protected appState: AppState,
        protected config: ConfigService,
        protected errorService: ErrorService,
        protected translate: TranslateService,
        protected accountService: AccountService
    ) {
        super(appState, config, errorService, translate, accountService);
    }

    public ngOnDestroy() {
        super.ngOnDestroy();
    }
}
