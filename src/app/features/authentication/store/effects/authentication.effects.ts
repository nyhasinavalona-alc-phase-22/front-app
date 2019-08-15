import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { signIn, signInFail, signInSuccess } from '../actions/authentication.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';
import { of } from 'rxjs';

@Injectable()
export class AuthenticationEffects {
    signIn$ = createEffect(() => this.actions$.pipe(
        ofType(signIn),
        switchMap((action) =>
            this.authenticationService.signIn({ userName: action.userName, password: action.password }).pipe(
                map((response: object) => signInSuccess({ user: response })),
                catchError((error) => of(signInFail({ error })))
            ))
    ));

    constructor(private actions$: Actions, private authenticationService: AuthenticationService) {
    }
}
