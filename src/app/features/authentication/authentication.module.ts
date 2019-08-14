import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignInRootComponent } from './containers/sign-in-root/sign-in-root.component';
import { SharedModule } from '../../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { AuthenticationEffects } from './store/effects/authentication.effects';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
    declarations: [
        SignInRootComponent
    ],
    imports: [
        CommonModule,
        AuthenticationRoutingModule,
        SharedModule,
        EffectsModule.forRoot([AuthenticationEffects])
    ],
    providers: [
        AuthenticationService
    ]
})
export class AuthenticationModule {
}
