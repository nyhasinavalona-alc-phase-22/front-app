import { HttpErrorResponse } from '@angular/common/http';
import { Action, createReducer, on } from '@ngrx/store';
import { Video } from '../../types/video.interface';
import {
  loadVideos,
  loadVideosFail,
  loadVideosSuccess,
} from '../actions/video.actions';

export const videoStateKey = 'video';

export interface VideoState {
  loadingVideos: boolean;
  videosLoaded: boolean;
  loadingVideosError: HttpErrorResponse;
  videos: Video[];
}

export const initialState: VideoState = {
  loadingVideos: false,
  videosLoaded: false,
  loadingVideosError: undefined,
  videos: undefined,
};

const reducer = createReducer(
  initialState,
  on(loadVideos, (state) => ({
    ...state,
    loadingVideos: true,
    videosLoaded: false,
  })),
  on(loadVideosFail, (state, { error }) => ({
    ...state,
    loadingVideos: false,
    videosLoaded: false,
    loadingVideosError: error,
  })),
  on(loadVideosSuccess, (state, { videos }) => ({
    ...state,
    loadingVideos: false,
    videosLoaded: true,
    videos,
  })),
);

export function videoReducer(state: VideoState | undefined, action: Action) {
  return reducer(state, action);
}
