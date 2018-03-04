import { Routes } from '@angular/router';

import { routePath } from '../../routing/route-path';
import { MobileComponent } from '../../../../components/mobile/mobile.component';
import { NoContentComponent } from '../../../../components/shared/pages/no-content';

export const PageRoutes: Routes = [
    { path: '', redirectTo: routePath.main, pathMatch: 'full' },
    { path: routePath.main, component: MobileComponent, data: { nav: true } },
    { path: '**', component: NoContentComponent }
];