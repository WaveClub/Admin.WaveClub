import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as MobileDetect from 'mobile-detect';

import { DEFAULT_STATE, VIEW_STATES, ViewState } from 'config/view-state';

@Injectable()
export class AppState {
    public readonly STATE = VIEW_STATES;

    private readonly _onViewChange = new BehaviorSubject<ViewState>(DEFAULT_STATE);
    private _state: ViewState;

    constructor(private router: Router) {
        const md = new MobileDetect(navigator.userAgent);
        this._state = !!(md.mobile() || md.phone() || md.tablet()) ? this.STATE.MOBILE : this.STATE.DESKTOP;
        this._onViewChange.next(this._state);
    }

    public get onViewChange(): Observable<ViewState> {
        return this._onViewChange.asObservable();
    }

    public get state(): ViewState {
        return this._state;
    }

    public set state(state: ViewState) {
        if (this._state === state ||
            Object.keys(this.STATE).map((key) => this.STATE[key]).indexOf(state) === -1
        ) {
            return;
        }

        this._state = state;
        this._onViewChange.next(state);
    }
}
