export class GetAccountRequest {
    public phone: string;
    public password: string;

    constructor(phone: string, password: string) {
        this.phone = phone;
        this.password = password;
    }
}
