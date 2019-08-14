import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { signIn, signInFail, signInSuccess } from '../actions/authentication.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';
import { ApiResponse } from '../../../../shared/types/api-response.interface';
import { of } from 'rxjs';

@Injectable()
export class AuthenticationEffects {
    @Effect()
    signIn$ = createEffect(() => this.actions$.pipe(
        ofType(signIn),
        switchMap((action) => this.authenticationService.signIn({
            userName: action.userName,
            password: action.password
        }).pipe(
            map((response: ApiResponse) => signInSuccess({ user: response.data })),
            catchError((error) => of(signInFail({ error })))
        ))
    ));

    constructor(private actions$: Actions, private authenticationService: AuthenticationService) {
    }
}
