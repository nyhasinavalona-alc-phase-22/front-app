import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { signIn, signInFail, signInSuccess } from '../actions/authentication.actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationResponse } from '../../types/authentication-response.interface';

@Injectable()
export class AuthenticationEffects {
    signIn$ = createEffect(() => this.actions$.pipe(
        ofType(signIn),
        switchMap((action) => this.authenticationService
            .signIn({ userName: action.userName, password: action.password }).pipe(
                map((response: AuthenticationResponse) => signInSuccess({
                    user: response.user,
                    token: response.token
                })),
                catchError((error) => of(signInFail({ error })))
            ))
    ));

    signInSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(signInSuccess),
        tap(() => this.router.navigate(['/home']))
    ), { dispatch: false });

    constructor(
        private actions$: Actions,
        private authenticationService: AuthenticationService,
        private router: Router
    ) {
    }
}
