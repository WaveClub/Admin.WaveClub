import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { HttpHeaders } from '@angular/common/http/src/headers';
import { ObservableService } from 'app/services';


@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {

    constructor(private observableService: ObservableService) {}

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let aHeaders = req.headers;
        aHeaders = aHeaders.append('Content-Type', 'application/json');
        aHeaders = aHeaders.append('Authorization', localStorage.getItem('access_token') || '');

        const authReq = req.clone({ headers: aHeaders });

        return next.handle(authReq)
            .catch((error, caught) => {
                if (error.status === 401) {
                    this.observableService.errorMessage = 'Incorrect login or password';
                }
                return Observable.throw(error);
            }) as any;
    }
}
