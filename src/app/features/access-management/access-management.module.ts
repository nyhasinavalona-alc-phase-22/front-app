import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessManagementRoutingModule } from './access-management-routing.module';
import { UserRootComponent } from './containers/user-root/user-root.component';

@NgModule({
    declarations: [
        UserRootComponent
    ],
    imports: [
        CommonModule,
        AccessManagementRoutingModule
    ]
})
export class AccessManagementModule {
}
