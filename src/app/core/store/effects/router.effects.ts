import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { back, forward, go } from '../actions/router.actions';

@Injectable()
export class RouterEffects {
  go$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(go),
        tap((action) =>
          this.router.navigate(action.path, {
            queryParams: action.queryParams,
            ...action.extras,
          }),
        ),
      ),
    { dispatch: false },
  );

  back$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(back),
        tap(() => this.location.back()),
      ),
    { dispatch: false },
  );

  forward$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(forward),
        tap(() => this.location.forward()),
      ),
    { dispatch: false },
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location,
  ) {}
}
