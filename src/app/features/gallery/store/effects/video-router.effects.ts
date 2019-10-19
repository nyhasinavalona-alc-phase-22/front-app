import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { VideoService } from '../../services/video.service';
import { loadVideosFail, loadVideosSuccess } from '../actions/video.actions';

@Injectable()
export class VideoEffects {
  loadVideos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      switchMap((action) =>
        this.videoService.loadVideos().pipe(
          map((videos) => loadVideosSuccess({ videos })),
          catchError((error) => of(loadVideosFail({ error }))),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private videoService: VideoService) {}
}
