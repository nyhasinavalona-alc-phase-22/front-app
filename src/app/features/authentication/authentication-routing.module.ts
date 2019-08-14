import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInRootComponent } from './containers/sign-in-root/sign-in-root.component';

const routes: Routes = [
    {
        path: 'sign-in',
        component: SignInRootComponent
    },
    {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
