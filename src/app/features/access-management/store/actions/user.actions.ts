import { createAction, props } from '@ngrx/store';
import { User } from '../../types/user.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { Paginator } from '../../../../shared/types/paginator.interface';
import { Sort } from '../../../../shared/types/sort.interface';

export const loadUsers = createAction('[User] Load users', props<{ paginator: Paginator, sort?: Sort }>());
export const loadUsersFail = createAction('[User] Load users fail', props<{ error: HttpErrorResponse }>());
export const loadUsersSuccess = createAction('[User] Load users success', props<{ users: User[], totalItems: number }>());

export const loadUser = createAction('[User] Load user');
export const loadUserFail = createAction('[User] Load user fail', props<{ error: HttpErrorResponse }>());
export const loadUserSuccess = createAction('[User] Load user success', props<{ user: User }>());

export const addUser = createAction('[User] Add user', props<{ user: User }>());
export const addUserFail = createAction('[User] Add user fail', props<{ error: HttpErrorResponse }>());
export const addUserSuccess = createAction('[User] Add user success', props<{ user: User }>());

export const updateUser = createAction('[User] Update user', props<{ user: User }>());
export const updateUserFail = createAction('[User] Update user fail', props<{ error: HttpErrorResponse }>());
export const updateUserSuccess = createAction('[User] Update user success', props<{ user: User }>());

export const deleteUser = createAction('[User] Delete user', props<{ user: User }>());
export const deleteUserFail = createAction('[User] Delete user fail', props<{ error: HttpErrorResponse }>());
export const deleteUserSuccess = createAction('[User] Delete user success', props<{ user: User }>());
