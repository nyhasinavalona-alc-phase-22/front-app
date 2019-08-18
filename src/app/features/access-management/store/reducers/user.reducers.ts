import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { User } from '../../types/user.interface';
import { Action, createReducer } from '@ngrx/store';

export function selectId(user: User) {
    return user.id;
}

export function sortComparer(a: User, b: User): number {
    return a.fullName.localeCompare(b.fullName);
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
    selectId,
    sortComparer
});

export interface UserState extends EntityState<User> {
    selectedUser: User;
}

export const initialState: UserState = adapter.getInitialState({
    selectedUser: undefined
});

export const reducer = createReducer(
    initialState
);

export function userReducer(state: UserState | undefined, action: Action) {
    return reducer(state, action);
}
