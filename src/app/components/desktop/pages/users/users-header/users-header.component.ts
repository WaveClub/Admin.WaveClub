import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'users-header',
    styleUrls: [
        './users-header.component.less'
    ],
    templateUrl: './users-header.component.html'
})
export class UsersHeaderComponent {
    @Output() public onChangeTab = new EventEmitter<number>();
    private activeTab: number = 1;

    public changeTab(tab: number) {
        this.activeTab = tab;
        this.onChangeTab.emit(this.activeTab);
    }
}
