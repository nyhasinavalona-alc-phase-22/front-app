import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import {
  authenticationReducer,
  AuthenticationState
} from '../../../features/authentication/store/reducers/authentication.reducers';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

export interface State {
  authentication: AuthenticationState;
  router: RouterReducerState<any>;
}

export const reducers: ActionReducerMap<State> = {
  authentication: authenticationReducer,
  router: routerReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

