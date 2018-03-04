import { Routes } from '@angular/router';

import { routePath } from '../../routing/route-path';

import { NoContentComponent } from '../../../../components/shared/pages/no-content';
import { DesktopComponent } from '../../../../components/desktop/desktop.component';

export const PageRoutes: Routes = [
    { path: '', redirectTo: routePath.main, pathMatch: 'full' },
    { path: routePath.main, component: DesktopComponent, data: { nav: true } },
    { path: '**', component: NoContentComponent }
];