import { Component, Input, EventEmitter, Output } from '@angular/core';

import { AccountResponse as Account } from 'app/models/response';

import { ObservableService } from 'app/services';
import { AccountService } from 'app/services/account';

@Component({
    selector: 'users-detail',
    styleUrls: [
        './users-detail.component.less'
    ],
    templateUrl: './users-detail.component.html'
})
export class UsersDetailComponent {
    @Input() public user: Account;
    @Output() public onClose = new EventEmitter();

    private activeTab: number = 1;
    private get checkValidation(): boolean {
        if (this.user.name.length > 15 || this.user.name.length < 4) {
            this.observableService.errorMessage = 'The Name must be between 4 and 15 characters in length';
            return false;
        }
        if (this.user.phone.length !== 11) {
            this.observableService.errorMessage = 'Incorrect Phone number';
            return false;
        }

        return true;
    }

    constructor(protected observableService: ObservableService, protected accountService: AccountService) {}

    public close() {
        this.onClose.emit();
    }

    public saveChanges() {
        if (!this.checkValidation) {
            return;
        }

        this.accountService.updateUser(this.user).subscribe(() => this.close());
    }
}
