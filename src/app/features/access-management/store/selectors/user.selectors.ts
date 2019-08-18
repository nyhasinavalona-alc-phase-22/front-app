import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
    selectUserEntities,
    selectUserIds,
    selectUsers,
    selectUserTotal,
    UserState,
    userStateKey
} from '../reducers/user.reducers';

export const getUserState = createFeatureSelector<UserState>(userStateKey);

export const getUserIds = createSelector(getUserState, selectUserIds);

export const getUsers = createSelector(getUserState, selectUsers);

export const getUserEntities = createSelector(getUserState, selectUserEntities);

export const getUserTotal = createSelector(getUserState, selectUserTotal);

export const getUsersLoading = createSelector(getUserState, (state) => state.loadingUsers);

export const getUsersLoaded = createSelector(getUserState, (state) => state.usersLoaded);

export const getUsersLoadingError = createSelector(getUserState, (state) => state.usersLoadingError);

export const getSelectedUser = createSelector(getUserState, (state) => state.selectedUser);

export const getUserLoading = createSelector(getUserState, (state) => state.loadingUser);

export const getUserLoaded = createSelector(getUserState, (state) => state.userLoaded);

export const getUserLoadingError = createSelector(getUserState, (state) => state.userLoadingError);

export const getUserAdding = createSelector(getUserState, (state) => state.addingUser);

export const getUserAdded = createSelector(getUserState, (state) => state.userAdded);

export const getUserAddingError = createSelector(getUserState, (state) => state.userAddingError);

export const getUserUpdating = createSelector(getUserState, (state) => state.updatingUser);

export const getUserUpdated = createSelector(getUserState, (state) => state.userUpdated);

export const getUserUpdatingError = createSelector(getUserState, (state) => state.userUpdatingError);

export const getUserDeleting = createSelector(getUserState, (state) => state.deletingUser);

export const getUserDeleted = createSelector(getUserState, (state) => state.userDeleted);

export const getUserDeletingError = createSelector(getUserState, (state) => state.userDeletingError);

