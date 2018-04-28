import { Component } from '@angular/core';

@Component({
    selector: 'users-page',
    styleUrls: [
        './users-page.component.less'
    ],
    templateUrl: './users-page.component.html'
})
export class UsersPageComponent {
    public tab: number = 1;

    public onChangeTab(tab) {
        this.tab = tab;
    }
}
