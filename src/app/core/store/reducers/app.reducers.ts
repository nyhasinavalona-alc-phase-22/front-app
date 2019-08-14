import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import {
  authenticationReducer,
  AuthenticationState
} from '../../../features/authentication/store/reducers/authentication.reducers';

export interface State {
  authentication: AuthenticationState;
}

export const reducers: ActionReducerMap<State> = {
  authentication: authenticationReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
