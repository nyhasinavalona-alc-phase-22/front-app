import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignInRootComponent } from './containers/sign-in-root/sign-in-root.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';

@NgModule({
  declarations: [SignInRootComponent, SignInFormComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
