import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import {
    authenticationReducer,
    AuthenticationState
} from '../../../features/authentication/store/reducers/authentication.reducers';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { userReducer, UserState } from '../../../features/access-management/store/reducers/user.reducers';

export interface State {
    authentication: AuthenticationState;
    user: UserState;
    router: RouterReducerState<any>;
}

export const reducers: ActionReducerMap<State> = {
    authentication: authenticationReducer,
    user: userReducer,
    router: routerReducer
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({
        keys: ['authentication'],
        rehydrate: true
    })(reducer);
}

export const metaReducers: MetaReducer<State>[] = [localStorageSyncReducer];

