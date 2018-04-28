import { Component, Input, EventEmitter, Output } from '@angular/core';

import { AccountResponse as Account } from 'app/models/response';

import { ObservableService } from 'app/services';
import { AccountService } from 'app/services/account';

@Component({
    selector: 'users-create',
    styleUrls: [
        './users-create.component.less'
    ],
    templateUrl: './users-create.component.html'
})
export class UsersCreateComponent {
    @Output() public onClose = new EventEmitter();

    public activeTab: number = 1;
    public cUser: Account = new Account();

    private get checkValidation(): boolean {
        if (this.cUser.name.length > 15 || this.cUser.name.length < 4) {
            this.observableService.errorMessage = 'The Name must be between 4 and 15 characters in length';
            return false;
        }
        if (this.cUser.phone.length !== 11) {
            this.observableService.errorMessage = 'Incorrect Phone number';
            return false;
        }

        return true;
    }

    constructor(protected observableService: ObservableService, protected accountService: AccountService) {
        this.cUser.role = 'admin';
        this.cUser.sex = 'male';
    }

    public close() {
        this.onClose.emit();
    }

    public createUser() {
        if (!this.checkValidation) {
            return;
        }
        this.cUser.password = this.cUser.phone;
        this.accountService.addUser(this.cUser).subscribe(() => this.close());
    }
}
