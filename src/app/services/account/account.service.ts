import { Injectable } from "@angular/core";
import { catchError, map } from 'rxjs/operators';

import { AccountResponse as Account } from 'app/models/response';
import { GetAccountRequest } from 'app/models/request'
import { GetAccountResponse } from 'app/models/response';

import { 
    ApiService, 
    ConfigService 
} from 'app/services';

@Injectable()
export class AccountService {
    public account: Account;

    constructor(
        private apiService: ApiService,
        private configService: ConfigService
    ) {}

    public authorization(phone: string, password: string) {
        const body = new GetAccountRequest(phone, password);

        return this.apiService.sendApiRequest(body, this.configService.app.api.methods.login)
            .pipe(
                map((response: GetAccountResponse) => {
                    this.account = response.Account;
                    this.apiService.setSessionId(response.SessionId);
                    return response.Result;
                })
            );
    }
}