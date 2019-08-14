import { HttpErrorResponse } from '@angular/common/http';
import { Action, createReducer, on } from '@ngrx/store';
import { signIn, signInFail, signInSuccess } from '../actions/authentication.actions';

export const authenticationStateKey = 'authentication';

export interface AuthenticationState {
    signInError: HttpErrorResponse;
    signing: boolean;
    signed: boolean;
    currentUser: object;
}

export const initialState: AuthenticationState = {
    signInError: undefined,
    signing: false,
    signed: false,
    currentUser: undefined
};

const reducer = createReducer(
    initialState,
    on(signIn, state => ({ ...state, signing: true })),
    on(signInFail, (state, { error }) => ({ ...state, signed: false, signing: false, signInError: error })),
    on(signInSuccess, (state, { user }) => ({ ...state, currentUser: user, signing: false, signed: true }))
);

export function authenticationReducer(state: AuthenticationState | undefined, action: Action) {
    return reducer(state, action);
}
