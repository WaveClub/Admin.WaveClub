import { Injectable } from '@angular/core';

@Injectable()
export class ErrorService {
    private readonly errorsDictionary: {
        
    }

    public getErrorMessage(errorCode: number): string {
        return '';
    }
}
