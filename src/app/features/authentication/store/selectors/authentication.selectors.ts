import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthenticationState, authenticationStateKey } from '../reducers/authentication.reducers';
import { State } from '../../../../core/store/reducers/app.reducers';

export const getAuthenticationState = createFeatureSelector<State, AuthenticationState>(authenticationStateKey);

export const getSignInError = createSelector(getAuthenticationState, (state: AuthenticationState) => state.signInError);

export const getSigning = createSelector(getAuthenticationState, (state: AuthenticationState) => state.signing);

export const getSigned = createSelector(getAuthenticationState, (state: AuthenticationState) => state.signed);

export const getCurrentUser = createSelector(getAuthenticationState, (state: AuthenticationState) => state.currentUser);
