import { Pipe, PipeTransform } from '@angular/core';

import { AccountResponse as Account } from 'app/models/response';

@Pipe({ name: 'searchUsers' })
export class SearchUsersPipe implements PipeTransform {

    public transform(users: Account[], word: string) {
        if (!users || !users.length || !word || word.length < 3) {
            return users;
        }

        const result = users.filter((user) => user.name.indexOf(word) > -1 || user.phone.indexOf(word) > -1);
        return result;
    }
}
