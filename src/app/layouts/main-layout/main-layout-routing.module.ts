import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from './main-layout.component';

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
    },
];

export const MainLayoutRoutingModule = RouterModule.forChild(routes);
