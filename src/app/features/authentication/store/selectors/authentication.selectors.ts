import { createSelector } from '@ngrx/store';
import { AuthenticationState } from '../reducers/authentication.reducers';
import { State } from '../../../../core/store/reducers/app.reducers';

export const getAuthenticationState = (state: State) => state.authentication;

export const getSignInError = createSelector(getAuthenticationState, (state: AuthenticationState) => state.signInError);

export const getSigning = createSelector(getAuthenticationState, (state: AuthenticationState) => state.signing);

export const getSigned = createSelector(getAuthenticationState, (state: AuthenticationState) => state.signed);

export const getCurrentUser = createSelector(getAuthenticationState, (state: AuthenticationState) => state.currentUser);
