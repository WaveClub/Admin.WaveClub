import { Component, transition, style, animate, trigger } from '@angular/core';

import { AccountService } from 'app/services/account';
import { ObservableService } from 'app/services';

import { AccountResponse as Account } from 'app/models/response';

@Component({
    selector: 'desktop',
    styleUrls: [
        './desktop.component.less'
    ],
    templateUrl: './desktop.component.html',
    animations: [
        trigger(
            'emersion',
            [
                transition(':enter', [
                    style({ width: '0px' }),
                    animate(200, style({ width: '240px' }))
                ]),
                transition(':leave', [
                    animate(200, style({ width: '0px', opacity: 0 }))
                ])
            ]
        ),
        trigger(
            'fade',
            [
                transition(':enter', [
                    style({ opacity: 0 }),
                    animate(0, style({ opacity: 1 }))
                ]),
                transition(':leave', [
                    animate(400, style({ opacity: 0 }))
                ])
            ]
        )
    ]
})
export class DesktopComponent {
    public account: Account;
    public isShowMenu: boolean = false;
    public menuItem: string = 'Home';

    private get isUsersPage(): boolean {
        return this.menuItem === 'Users';
    }

    private get isMenuPage(): boolean {
        return this.menuItem === 'Menu';
    }

    constructor(private accountService: AccountService, private observableService: ObservableService) {
        this.updateAccount();
        this.observableService.onMenuItemChanged.subscribe((item) => {
            this.menuItem = item;
            this.onShowMenu();
        });
    }

    public onAuthorization() {
        this.updateAccount();
    }

    public onLogout() {
        this.accountService.Account = undefined;
        this.updateAccount();
    }

    public onShowMenu() {
        this.isShowMenu = !this.isShowMenu;
    }

    private updateAccount() {
        this.account = this.accountService.Account;
    }
}
