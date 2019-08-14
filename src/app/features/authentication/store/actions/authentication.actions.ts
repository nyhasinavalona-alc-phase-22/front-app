import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const enum AuthenticationActionsTypes {
    SIGN_IN = '[AUTHENTICATION] Sign in',
    SIGN_IN_FAIL = '[AUTHENTICATION] Sign in Fail',
    SIGN_IN_SUCCESS = '[AUTHENTICATION] Sign in Success'
}

export const signIn = createAction(AuthenticationActionsTypes.SIGN_IN, props<{ email: string, password: string }>());
export const signInFail = createAction(AuthenticationActionsTypes.SIGN_IN_FAIL, props<{ error: HttpErrorResponse }>());
export const signInSuccess = createAction(AuthenticationActionsTypes.SIGN_IN_SUCCESS, props<{ user: object }>());
