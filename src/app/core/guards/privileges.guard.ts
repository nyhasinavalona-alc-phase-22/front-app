import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { State } from '../store/reducers/app.reducers';
import { getCurrentUserPrivileges } from '../../features/authentication/store/selectors/authentication.selectors';
import { map } from 'rxjs/operators';
import { Privilege } from '../../features/access-management/types/privilege.interface';

@Injectable()
export class PrivilegesGuard implements CanActivate {
    constructor(private store: Store<State>) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any> {
        return this.store.pipe(
            select(getCurrentUserPrivileges),
            map((privileges: Privilege[]) => privileges.find(p => p.name === next.data.privilege))
        );
    }

}
