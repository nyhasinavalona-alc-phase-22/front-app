import { HttpErrorResponse } from '@angular/common/http';
import { Action, createReducer, on } from '@ngrx/store';
import { Video } from '../../types/video.interface';
import {
  loadVideo,
  loadVideoFail,
  loadVideos,
  loadVideosFail,
  loadVideosSuccess,
  loadVideoSuccess,
  updateVideo,
  updateVideoFail,
  updateVideoSuccess,
} from '../actions/video.actions';

export const videoStateKey = 'video';

export interface VideoState {
  loadingVideos: boolean;
  videosLoaded: boolean;
  loadingVideosError: HttpErrorResponse;
  loadingVideo: boolean;
  videoLoaded: boolean;
  loadingVideoError: HttpErrorResponse;
  piningVideo: boolean;
  videoPined: boolean;
  piningVideoError: HttpErrorResponse;
  videos: Video[];
  video: Video;
}

export const initialState: VideoState = {
  loadingVideos: false,
  videosLoaded: false,
  loadingVideosError: undefined,
  videos: undefined,
  loadingVideo: false,
  videoLoaded: false,
  loadingVideoError: undefined,
  video: undefined,
  piningVideoError: undefined,
  piningVideo: false,
  videoPined: false,
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
  on(loadVideo, (state) => ({
    ...state,
    loadingVideo: true,
    videoLoaded: false,
  })),
  on(loadVideoFail, (state, { error }) => ({
    ...state,
    loadingVideo: false,
    videoLoaded: false,
    loadingVideoError: error,
  })),
  on(loadVideoSuccess, (state, { video }) => ({
    ...state,
    loadingVideo: false,
    videoLoaded: true,
    video,
  })),
  on(updateVideo, (state) => ({
    ...state,
    piningVideo: true,
    videoPined: false,
  })),
  on(updateVideoFail, (state, { error }) => ({
    ...state,
    piningVideo: false,
    videoPined: false,
    piningVideoError: error,
  })),
  on(updateVideoSuccess, (state, { video }) => ({
    ...state,
    piningVideo: false,
    videoPined: true,
    videos: state.videos.map((v) => (v.id === video.id ? video : v)),
  })),
);

export function videoReducer(state: VideoState | undefined, action: Action) {
  return reducer(state, action);
}
