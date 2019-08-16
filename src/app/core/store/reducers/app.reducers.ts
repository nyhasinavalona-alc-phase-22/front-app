import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import {
    authenticationReducer,
    AuthenticationState
} from '../../../features/authentication/store/reducers/authentication.reducers';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { localStorageSync } from 'ngrx-store-localstorage';

export interface State {
    authentication: AuthenticationState;
    router: RouterReducerState<any>;
}

export const reducers: ActionReducerMap<State> = {
    authentication: authenticationReducer,
    router: routerReducer
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({
        keys: ['authentication'],
        rehydrate: true
    })(reducer);
}

export const metaReducers: MetaReducer<State>[] = [localStorageSyncReducer];

