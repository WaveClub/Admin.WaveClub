import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ObservableService {
    private readonly _onErrorOccurred = new Subject<string>();
    private readonly _onMenuItemChanged = new Subject<string>();

    public get onErrorOccurred(): Observable<string> {
        return this._onErrorOccurred.asObservable();
    }

    public set errorMessage(value: string) {
        this._onErrorOccurred.next(value);
    }

    public get onMenuItemChanged(): Observable<string> {
        return this._onMenuItemChanged.asObservable();
    }

    public set menuItem(value: string) {
        this._onMenuItemChanged.next(value);
    }
}
