import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { User } from '../../types/user.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import {
    addUser,
    addUserFail,
    addUserSuccess,
    deleteUser,
    deleteUserFail,
    deleteUserSuccess,
    loadUser,
    loadUserFail,
    loadUsers,
    loadUsersFail,
    loadUsersSuccess,
    loadUserSuccess,
    updateUser,
    updateUserFail,
    updateUserSuccess
} from '../actions/user.actions';
import { Paginator } from '../../../../shared/types/paginator.interface';

export const userStateKey = 'user';

export function selectId(user: User) {
    return user.id;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
    selectId
});

const {
    selectIds,
    selectAll,
    selectEntities,
    selectTotal
} = adapter.getSelectors();

export const selectUserIds = selectIds;
export const selectUsers = selectAll;
export const selectUserTotal = selectTotal;
export const selectUserEntities = selectEntities;

export interface UserState extends EntityState<User> {
    selectedUser: User;
    paginator: Paginator;
    loadingUsers: boolean;
    usersLoaded: boolean;
    usersLoadingError: HttpErrorResponse;
    loadingUser: boolean;
    userLoaded: boolean;
    userLoadingError: HttpErrorResponse;
    addingUser: boolean;
    userAdded: boolean;
    userAddingError: HttpErrorResponse;
    updatingUser: boolean;
    userUpdated: boolean;
    userUpdatingError: HttpErrorResponse;
    deletingUser: boolean;
    userDeleted: boolean;
    userDeletingError: HttpErrorResponse;
}

export const initialState: UserState = adapter.getInitialState({
    selectedUser: undefined,
    paginator: {
        page: 1,
        pageSize: 15
    },
    loadingUsers: false,
    usersLoaded: false,
    usersLoadingError: undefined,
    loadingUser: false,
    userLoaded: false,
    userLoadingError: undefined,
    addingUser: false,
    userAdded: false,
    userAddingError: undefined,
    updatingUser: false,
    userUpdated: false,
    userUpdatingError: undefined,
    deletingUser: false,
    userDeleted: false,
    userDeletingError: undefined
});

export const reducer = createReducer(
    initialState,
    on(loadUsers, (state, { paginator }) => ({ ...state, loadingUsers: true, usersLoaded: false, paginator })),
    on(loadUsersFail, (state, { error }) => ({
        ...state,
        usersLoadingError: error,
        loadingUsers: false,
        usersLoaded: false
    })),
    on(loadUsersSuccess, (state, { users }) => adapter.addAll(users, {
        ...state,
        usersLoaded: true,
        loadingUsers: false
    })),
    on(loadUser, (state) => ({ ...state, userLoaded: true, loadingUser: false })),
    on(loadUserFail, (state) => ({ ...state, userLoaded: false, loadingUser: false })),
    on(loadUserSuccess, (state, { user }) => ({ ...state, selectedUser: user })),
    on(addUser, (state) => ({ ...state, addingUser: true, userAdded: false })),
    on(addUserFail, (state, { error }) => ({ ...state, userAddingError: error, userAdded: false, addingUser: false })),
    on(addUserSuccess, (state, { user }) => adapter.addOne(user, { ...state, userAdded: true, addingUser: false })),
    on(updateUser, (state) => ({ ...state, updatingUser: true, userUpdated: false })),
    on(updateUserFail, (state, { error }) => ({
        ...state,
        userUpdatingError: error,
        userUpdated: false,
        updatingUser: false
    })),
    on(updateUserSuccess, (state, { user }) => adapter.updateOne({ id: user.id, changes: user }, {
        ...state,
        updatingUser: false,
        userUpdated: true
    })),
    on(deleteUser, (state) => ({ ...state, deletingUser: true, userDeleted: false })),
    on(deleteUserFail, (state, { error }) => ({
        ...state,
        userDeletingError: error,
        userDeleted: false,
        deletingUser: false
    })),
    on(deleteUserSuccess, (state, { user }) => adapter.removeOne(user.id, {
        ...state,
        userDeleted: true,
        deletingUser: false
    }))
);

export function userReducer(state: UserState | undefined, action: Action) {
    return reducer(state, action);
}
