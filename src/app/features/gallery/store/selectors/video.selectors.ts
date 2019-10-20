import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from 'src/app/core/store/reducers/app.reducers';
import { Video } from '../../types/video.interface';
import { VideoState, videoStateKey } from '../reducers/video.reducers';

export const getVideoState = createFeatureSelector<State, VideoState>(
  videoStateKey,
);

export const getVideos = createSelector<State, VideoState, Video[]>(
  getVideoState,
  (state: VideoState) => state.videos,
);

export const getLoadingVideos = createSelector(
  getVideoState,
  (state: VideoState) => state.loadingVideos,
);

export const getVideosLoaded = createSelector(
  getVideoState,
  (state: VideoState) => state.videosLoaded,
);

export const getLoadingVideosError = createSelector(
  getVideoState,
  (state: VideoState) => state.loadingVideosError,
);
