import { Routes } from '@angular/router';
import { AotDesktopRoutes, AotMobileRoutes } from '../modules/routing/aot-routes';

export interface ViewState {
    routes: Routes;
    css: string;
}

export const VIEW_STATES: { [key: string]: ViewState } = {
    DESKTOP: {
        routes: AotDesktopRoutes,
        css: 'desktop'
    },
    MOBILE: {
        routes: AotMobileRoutes,
        css: 'mobile'
    }
};

export const DEFAULT_STATE = VIEW_STATES.DESKTOP;