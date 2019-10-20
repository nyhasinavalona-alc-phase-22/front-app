import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { VideoService } from '../../services/video.service';
import {
  loadVideo,
  loadVideoFail,
  loadVideos,
  loadVideosFail,
  loadVideosSuccess,
  loadVideoSuccess,
} from '../actions/video.actions';

@Injectable()
export class VideoEffects {
  loadVideos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadVideos),
      switchMap((action) =>
        this.videoService.loadVideos().pipe(
          map((videos) => loadVideosSuccess({ videos })),
          catchError((error) => of(loadVideosFail({ error }))),
        ),
      ),
    ),
  );

  loadVideo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadVideo),
      switchMap((action) =>
        this.videoService.loadVideo(action.id).pipe(
          map((video) => loadVideoSuccess({ video })),
          catchError((error) => of(loadVideoFail({ error }))),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private videoService: VideoService) {}
}
