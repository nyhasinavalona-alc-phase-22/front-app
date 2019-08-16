import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRootComponent } from './containers/home-root/home-root.component';
import { SessionGuard } from './guards/session.guard';

const routes: Routes = [
    {
        path: 'home',
        component: HomeRootComponent,
        canActivate: [SessionGuard],
        canActivateChild: [SessionGuard],
        children: [
            {
                path: 'access-management',
                loadChildren: '../features/access-management/access-management.module#AccessManagementModule'
            },
            {
                path: '',
                redirectTo: 'access-management',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule {
}
