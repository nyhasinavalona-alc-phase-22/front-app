import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessManagementRoutingModule } from './access-management-routing.module';
import { UserRootComponent } from './containers/user-root/user-root.component';
import { RoleRootComponent } from './containers/role-root/role-root.component';

@NgModule({
    declarations: [
        UserRootComponent,
        RoleRootComponent
    ],
    imports: [
        CommonModule,
        AccessManagementRoutingModule
    ]
})
export class AccessManagementModule {
}
