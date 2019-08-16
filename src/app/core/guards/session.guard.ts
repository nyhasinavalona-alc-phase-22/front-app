import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { State } from '../store/reducers/app.reducers';
import { getSigned } from '../../features/authentication/store/selectors/authentication.selectors';

@Injectable({
    providedIn: 'root'
})
export class SessionGuard implements CanActivate {
    constructor(private store: Store<State>) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {
        return this.store.pipe(select(getSigned));
    }

}
