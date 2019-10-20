import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RouterNavigationAction, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';
import { State } from 'src/app/core/store/reducers/app.reducers';
import { loadVideo, loadVideos } from '../actions/video.actions';

@Injectable()
export class VideoRouterEffects {
  loadVideos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter(
        (action: RouterNavigationAction) =>
          action.payload.routerState.url.includes('home/gallery') &&
          !action.payload.routerState.url.includes('details'),
      ),
      map(() => loadVideos({ filters: {} })),
    ),
  );

  loadFavoriteVideos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter(
        (action: RouterNavigationAction) =>
          action.payload.routerState.url.includes('home/gallery/favorite') &&
          !action.payload.routerState.url.includes('details'),
      ),
      map(() => loadVideos({ filters: { pined: true } })),
    ),
  );

  loadVideo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((action: RouterNavigationAction) =>
        action.payload.routerState.url.includes('home/gallery/details'),
      ),
      map((action: RouterNavigationAction) => {
        const array = action.payload.routerState.url.split('/');
        return array[array.length - 1];
      }),
      map((id) => loadVideo({ id })),
    ),
  );
  constructor(private actions$: Actions, private store: Store<State>) {}
}
