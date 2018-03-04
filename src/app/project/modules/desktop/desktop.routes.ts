import { Routes } from '@angular/router';

import { PageRoutes } from './routes';
import { DesktopComponent } from '../../../components/desktop/desktop.component';


export const DesktopRoutes: Routes = [
    { path: '', component: DesktopComponent, children: PageRoutes }
];