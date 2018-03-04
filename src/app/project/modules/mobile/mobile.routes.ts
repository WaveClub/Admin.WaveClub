import { Routes } from '@angular/router';

import { PageRoutes } from './routes';

import { MobileComponent } from '../../../components/mobile/mobile.component';

export const MobileRoutes: Routes = [
    { path: '', component: MobileComponent, children: PageRoutes }
];