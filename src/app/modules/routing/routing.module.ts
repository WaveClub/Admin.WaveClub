import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { DEFAULT_STATE } from 'config/view-state';

import { AppState } from 'app/services/app.service';

@NgModule({
    imports: [
        RouterModule.forRoot(DEFAULT_STATE.routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AppState
    ]
})
export class AppRoutingModule {
    private currentRoutes = DEFAULT_STATE.routes;

    constructor(
        private appState: AppState,
        private router: Router
    ) {
        appState.onViewChange.subscribe((state) => {
            if (this.currentRoutes !== state.routes) {
                this.currentRoutes = state.routes;
                this.router.resetConfig(state.routes);
            }
        });
    }
}
