import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RouterNavigationAction, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { filter, map } from 'rxjs/operators';
import { loadVideos } from '../actions/video.actions';

@Injectable()
export class VideoRouterEffects {
  loadVideos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((action: RouterNavigationAction) =>
        action.payload.routerState.url.includes('home/gallery'),
      ),
      map(() => loadVideos()),
    ),
  );
  constructor(private actions$: Actions) {}
}
