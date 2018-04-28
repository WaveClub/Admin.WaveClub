import { Component } from '@angular/core';

import { AccountService } from 'app/services/account';

import { AccountResponse as Account } from 'app/models/response';

@Component({
    selector: 'mobile',
    styleUrls: [
        './mobile.component.less'
    ],
    templateUrl: './mobile.component.html'
})
export class MobileComponent {
    public account: Account;
    constructor(private accountService: AccountService) {}

    public onAuthorization() {
        this.account = this.accountService.Account;
    }
}
