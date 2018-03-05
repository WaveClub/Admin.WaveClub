export class GetAccountRequest {
    Phone: string;
    Password: string;

    constructor(phone: string, password: string) {
        this.Phone = phone;
        this.Password = password;
    }
}