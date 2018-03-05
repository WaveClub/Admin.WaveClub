import { AccountResponse } from 'app/models/response/base';

export class GetAccountResponse {
    public Account: AccountResponse;
    public Result: number;
    public SessionId: string;
}