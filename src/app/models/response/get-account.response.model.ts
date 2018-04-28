import { AccountResponse } from 'app/models/response/base';

export class GetAccountResponse {
    public account: AccountResponse;
    public status_code: number;
    public access_token: string;
    public description: string;
}
