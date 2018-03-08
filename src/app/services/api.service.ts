import { Injectable, Inject, forwardRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map, take } from 'rxjs/operators';

import { ConfigService } from 'app/services';

@Injectable()
export class ApiService {
    private sessionId: string;

    constructor(
        private http: HttpClient,
        // tslint:disable-next-line:no-forward-ref
        @Inject(forwardRef(() => ConfigService)) private config: ConfigService
    ) {}

    public setSessionId(sessionId: string) {
        this.sessionId = sessionId;
    }

    private get apiUrl(): string {
        return `${this.config.app.api.domen}${this.config.app.api.version}`;
    }

    public sendApiRequest(body: any, method: string, headers?: Headers) {
        return this.sendRequest(`${this.apiUrl}${method}`, body, headers);
    }

    private sendRequest(url: string, body: any, headers: Headers): Observable<any> {
        return this.http
            .post(url, JSON.stringify(body)).pipe(
                take(1),
                map((response) => response)
            );
    }
}
