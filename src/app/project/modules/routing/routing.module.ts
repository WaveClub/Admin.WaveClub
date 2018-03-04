import { NgModule } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { AppState } from '../../../services/app.service';
import { DEFAULT_STATE } from '../../';



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