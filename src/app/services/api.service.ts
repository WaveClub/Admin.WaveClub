import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ConfigService } from "./config.service";

@Injectable()
export class ApiService {
    private sessionId: string;

    constructor(
        private http: HttpClient,
        private config: ConfigService
    ) {}

    public setSessionId(sessionId: string) {
        this.sessionId = sessionId;
        // if (this.sessionId) {
        //     this.updateLastActivity();
        // }
    }

    private get apiUrl(): string {
        return this.config.app.api.domen;
    }

    public sendApiRequest(body: any, headers: Headers) {
        return this.sendRequest(this.apiUrl, body, headers);
    }

    private sendRequest(url: string, body: any, headers: Headers): Observable<any> {
        return this.http
            .post(url, JSON.stringify(body)).pipe(
                take(1),
                map((response) => response)
            );
    }
}