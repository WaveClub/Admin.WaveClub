import { Component } from '@angular/core';

import { AccountService } from 'app/services/account';

import { AccountResponse as Account } from 'app/models/response';

@Component({
    selector: 'users-info',
    styleUrls: [
        './users-info.component.less'
    ],
    templateUrl: './users-info.component.html'
})
export class UsersInfoComponent {
    public isOnlyActivated: boolean = false;
    public isCreateUser: boolean = false;
    public users: Account[];
    public searchWord: string;
    public currentUser: Account;

    constructor(private accountService: AccountService) {
        accountService.getUsersInfo('all').subscribe((result) => this.users = result);
    }

    public refreshUsers() {
        this.accountService.getUsersInfo('all').subscribe((result) => this.users = result);
    }

    public selectUser(user: Account) {
        this.currentUser = JSON.parse(JSON.stringify(user));
    }
}
