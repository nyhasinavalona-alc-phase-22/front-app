import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessManagementRoutingModule } from './access-management-routing.module';
import { UserRootComponent } from './containers/user-root/user-root.component';
import { RoleRootComponent } from './containers/role-root/role-root.component';
import { EffectsModule } from '@ngrx/effects';
import { UserRouterEffects } from './store/effects/user-router.effects';
import { UserEffects } from './store/effects/user.effects';
import { UserService } from './services/user.service';
import { environment } from '../../../environments/environment';
import { UserMockService } from './services/user-mock.service';

@NgModule({
    declarations: [
        UserRootComponent,
        RoleRootComponent
    ],
    imports: [
        CommonModule,
        AccessManagementRoutingModule,
        EffectsModule.forFeature([UserEffects, UserRouterEffects])
    ],
    providers: [
        {
            provide: UserService,
            useClass: environment.production ? UserService : UserMockService
        }
    ]
})
export class AccessManagementModule {
}
