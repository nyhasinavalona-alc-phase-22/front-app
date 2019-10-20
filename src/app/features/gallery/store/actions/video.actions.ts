import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Video } from '../../types/video.interface';

export const loadVideos = createAction('[VIDEO] Load Videos');
export const loadVideosFail = createAction(
  '[VIDEO] Load Videos Fail',
  props<{ error: HttpErrorResponse }>(),
);
export const loadVideosSuccess = createAction(
  '[VIDEO] Load Videos Success',
  props<{ videos: Video[] }>(),
);
export const loadVideo = createAction(
  '[VIDEO] Load Video',
  props<{ id: string }>(),
);
export const loadVideoFail = createAction(
  '[VIDEO] Load Video Fail',
  props<{ error: HttpErrorResponse }>(),
);
export const loadVideoSuccess = createAction(
  '[VIDEO] Load Video Success',
  props<{ video: Video }>(),
);
