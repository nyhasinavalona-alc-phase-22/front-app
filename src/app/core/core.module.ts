import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationModule } from '../features/authentication/authentication.module';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './store/reducers/app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { HttpClientModule } from '@angular/common/http';
import { HomeRootComponent } from './containers/home-root/home-root.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CoreRoutingModule } from './core-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { RouterEffects } from './store/effects/router.effects';
import { AuthenticationEffects } from '../features/authentication/store/effects/authentication.effects';
import { SessionGuard } from './guards/session.guard';
import { PrivilegesGuard } from './guards/privileges.guard';
import { FakeApiModule } from '../features/fake-api/fake-api.module';

@NgModule({
    declarations: [
        HomeRootComponent,
        HeaderComponent,
        SidenavComponent
    ],
    imports: [
        CommonModule,
        CoreRoutingModule,
        AuthenticationModule,
        HttpClientModule,
        environment.production ? [] : FakeApiModule,
        StoreModule.forRoot(reducers, {
            metaReducers,
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true
            }
        }),
        EffectsModule.forRoot([RouterEffects, AuthenticationEffects]),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        StoreRouterConnectingModule.forRoot()
    ],
    providers: [
        SessionGuard,
        PrivilegesGuard
    ]
})
export class CoreModule {
}
