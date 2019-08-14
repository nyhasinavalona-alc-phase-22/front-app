import { createFeatureSelector } from '@ngrx/store';
import { State } from '../reducers/app.reducers';
import { getSelectors, RouterReducerState } from '@ngrx/router-store';

export const getRouterState = createFeatureSelector<State, RouterReducerState>('router');

export const {
    selectQueryParams,
    selectCurrentRoute,
    selectQueryParam,
    selectRouteData,
    selectRouteParam,
    selectRouteParams,
    selectUrl
} = getSelectors(getRouterState);
