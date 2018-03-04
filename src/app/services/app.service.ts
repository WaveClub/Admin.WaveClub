import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import * as MobileDetect from 'mobile-detect';
import { DEFAULT_STATE, VIEW_STATES, ViewState } from "../project";


@Injectable()
export class AppState {
    public readonly onViewChange = new BehaviorSubject<ViewState>(DEFAULT_STATE);
    public readonly STATE = VIEW_STATES

    private _state: ViewState;

    constructor(private router: Router) {
        const md = new MobileDetect(navigator.userAgent);
        this._state = !!(md.mobile() || md.phone() || md.tablet()) ? this.STATE.MOBILE : this.STATE.DESKTOP;
        this.onViewChange.next(this._state);
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
        this.onViewChange.next(state);
    }
}