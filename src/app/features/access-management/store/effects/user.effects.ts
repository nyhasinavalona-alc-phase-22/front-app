import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadUsers, loadUsersFail, loadUsersSuccess } from '../actions/user.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
    loadUsers$ = createEffect(() => this.actions$.pipe(
        ofType(loadUsers),
        switchMap((action) => this.userService.loadUsers({ paginator: action.paginator }).pipe(
            map((users) => loadUsersSuccess({ users })),
            catchError((error) => of(loadUsersFail({ error })))
        ))
    ));

    constructor(private actions$: Actions, private userService: UserService) {
    }
}
