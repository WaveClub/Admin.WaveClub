export class UpdateAccountRequest {
    public phone: string;
    public name: string;
    public sex: string;
    public role: string;

    constructor(phone: string, name: string, sex: string, role: string) {
        this.phone = phone;
        this.name = name;
        this.sex = sex;
        this.role = role;
    }
}
