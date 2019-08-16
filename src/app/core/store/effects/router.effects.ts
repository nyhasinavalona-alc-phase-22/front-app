import { Actions, createEffect, ofType } from '@ngrx/effects';
import { go } from '../actions/router.actions';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

export class RouterEffects {
    go$ = createEffect(() => this.actions$.pipe(
        ofType(go),
        tap((action) => this.router.navigate(action.path, { queryParams: action.queryParams, ...action.extras }))
    ), { dispatch: false });

    constructor(private actions$: Actions, private router: Router, private location: Location) {
    }
}
