import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

import { AccountResponse as Account } from 'app/models/response';
import { GetAccountRequest, UpdateAccountRequest } from 'app/models/request';
import { GetAccountResponse, GetUsersInfoResponse } from 'app/models/response';

import {
    ApiService,
    ConfigService,
    ObservableService
} from 'app/services';

@Injectable()
export class AccountService {
    private account: Account;

    constructor(
        private apiService: ApiService,
        private configService: ConfigService,
        private observableService: ObservableService
    ) {}

    public get Account(): Account {
        return this.account || JSON.parse(localStorage.getItem('account'));
    }

    public set Account(value) {
        this.account = value;

        if (value === undefined) {
            localStorage.removeItem('account');
            localStorage.removeItem('access_token');
        } else {
            localStorage.setItem('account', JSON.stringify(value));
        }
    }

    public authorization(phone: string, password: string) {
        const body = new GetAccountRequest(phone, password);

        return this.apiService.sendApiPostRequest(body, this.configService.app.api.methods.login)
            .pipe(
                map((response: GetAccountResponse) => {
                    if (response.status_code === 200) {
                        if (response.access_token) {
                            this.Account = response.account;
                            localStorage.setItem('access_token', 'JWT ' + response.access_token);
                        }

                        if (!this.isAdmin) {
                            this.observableService.errorMessage = 'No access rights';
                        } else if (!this.isActive) {
                            this.observableService.errorMessage = 'Account not activated, please activate account';
                        }
                    } else {
                        this.observableService.errorMessage = response.description;
                    }
                    return response.status_code === 200 && this.isAdmin;
                })
            );
    }

    public getUsersInfo(filter) {
        const params = this.configService.app.api.methods.account + '?filter=' + filter;

        return this.apiService.sendApiGetRequest(params)
            .pipe(
                map((response: GetUsersInfoResponse) => response.results)
            );
    }

    public updateUser(user: Account) {
        const params = this.configService.app.api.methods.account + '/' + user.id;
        const body = new UpdateAccountRequest(user.phone, user.name, user.sex, user.role);

        return this.apiService.sendApiPatchRequest(params, body)
            .pipe(
                map((response: any) => console.log(response))
            );
    }

    public addUser(user: Account) {
        const body = user;

        return this.apiService.sendApiPostRequest(body, this.configService.app.api.methods.registration)
            .pipe(
                map((response: any) => console.log(response))
            );
    }

    private get isAdmin(): boolean {
        return this.account && this.account.role === 'admin';
    }

    private get isActive(): boolean {
        return this.account && this.account.is_active;
    }
}
