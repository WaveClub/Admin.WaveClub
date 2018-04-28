import { Component, Input, trigger, transition, style, animate, Output, EventEmitter } from '@angular/core';

import { AccountResponse as Account } from 'app/models/response';
import { ObservableService } from 'app/services';

@Component({
    selector: 'header',
    styleUrls: [
        './header.component.less'
    ],
    templateUrl: './header.component.html',
    animations: [
        trigger(
            'fade',
            [
                transition(':enter', [
                    style({ opacity: 0 }),
                    animate(400, style({ opacity: 1 }))
                ]),
                transition(':leave', [
                    animate(400, style({ opacity: 0 }))
                ])
            ]
        )
    ]
})
export class HeaderComponent {
    @Input() public account: Account;
    @Output() public onLogout = new EventEmitter();
    @Output() public onShowMenu = new EventEmitter();

    public isShowProfileItems: boolean = false;
    public menuItem: string = 'Home';

    constructor(private observableService: ObservableService) {
        this.observableService.onMenuItemChanged.subscribe((item) => this.menuItem = item);
    }

    public logout() {
        this.onLogout.emit();
    }

    public showMenu() {
        this.onShowMenu.emit();
    }
}
