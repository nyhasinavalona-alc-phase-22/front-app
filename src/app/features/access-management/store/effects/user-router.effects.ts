import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { UserState } from '../reducers/user.reducers';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { filter, map } from 'rxjs/operators';
import { loadUsers } from '../actions/user.actions';
import { Injectable } from '@angular/core';

@Injectable()
export class UserRouterEffects {
    user$ = createEffect(() => this.actions$.pipe(
        ofType(ROUTER_NAVIGATION),
        map((action: RouterNavigationAction) => action.payload.routerState.url),
        filter(url => url.includes('access-management/user')),
        map(() => loadUsers())
    ));

    constructor(private actions$: Actions, private userStore: Store<UserState>) {
    }
}
