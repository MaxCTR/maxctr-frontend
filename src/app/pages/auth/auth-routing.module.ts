import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
    },
    {
        path: 'login',
        pathMatch: 'full',
        component: AuthComponent,
        children: [
            {
                path: '',
                component: LoginComponent
            },
        ]
    },
    {
        path: 'register',
        pathMatch: 'full',
        component: AuthComponent,
        children: [
            {
                path: '',
                component: RegisterComponent
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
