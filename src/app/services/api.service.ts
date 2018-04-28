import { Injectable, Inject, forwardRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map, take } from 'rxjs/operators';

import { ConfigService } from 'app/services';

@Injectable()
export class ApiService {
    constructor(
        private http: HttpClient,
        // tslint:disable-next-line:no-forward-ref
        @Inject(forwardRef(() => ConfigService)) private config: ConfigService
    ) {}

    private get apiUrl(): string {
        return `${this.config.app.api.domen}${this.config.app.api.version}`;
    }

    public sendApiPostRequest(body: any, method: string, _headers?: HttpHeaders) {
        return this.http
            .post(`${this.apiUrl}${method}`, JSON.stringify(body), { headers: _headers }).pipe(
                take(1),
                map((response) => response)
            );
    }

    public sendApiGetRequest(params: string, _headers?: HttpHeaders) {
        return this.http
            .get(`${this.apiUrl}${params}`, { headers: _headers }).pipe(
                take(1),
                map((response) => response)
            );
    }

    public sendApiPatchRequest(params: string, body: any, _headers?: HttpHeaders) {
        return this.http
            .patch(`${this.apiUrl}${params}`, body, { headers: _headers }).pipe(
                take(1),
                map((response) => response)
            );
    }
}
