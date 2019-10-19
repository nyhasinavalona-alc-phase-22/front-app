import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import {
  videoReducer,
  VideoState,
} from 'src/app/features/gallery/store/reducers/video.reducers';
import {
  authenticationReducer,
  AuthenticationState,
} from '../../../features/authentication/store/reducers/authentication.reducers';

export interface State {
  authentication: AuthenticationState;
  router: RouterReducerState<any>;
  video: VideoState;
}

export const reducers: ActionReducerMap<State> = {
  authentication: authenticationReducer,
  router: routerReducer,
  video: videoReducer,
};

export function localStorageSyncReducer(
  reducer: ActionReducer<any>,
): ActionReducer<any> {
  return localStorageSync({
    keys: ['authentication'],
    rehydrate: true,
  })(reducer);
}

export const metaReducers: MetaReducer<State>[] = [localStorageSyncReducer];
