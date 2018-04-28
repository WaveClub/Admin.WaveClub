import { AccountResponse } from 'app/models/response/base';

export class GetUsersInfoResponse {
    public results: AccountResponse[];
    public status_code: number;
}
