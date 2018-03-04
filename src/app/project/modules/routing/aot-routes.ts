import { Routes } from '@angular/router';

export const AotDesktopRoutes: Routes = [
    { path: '', loadChildren: '../desktop/desktop.module#DesktopModule' },
    { path: 'mobile', loadChildren: '../mobile/mobile.module#MobileModule', pathMatch: 'full' }
];

export const AotMobileRoutes: Routes = [
    { path: '', loadChildren: '../mobile/mobile.module#MobileModule' },
    { path: 'desktop', loadChildren: '../desktop/desktop.module#DesktopModule', pathMatch: 'full' }
];