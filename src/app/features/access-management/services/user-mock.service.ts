import { Injectable } from '@angular/core';
import { UserServiceInterface } from './user-service.type';
import { User } from '../types/user.interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserCriteria } from '../types/user-criteria.interface';
import { paginate } from '../../../shared/utils/paginate.util';

@Injectable()
export class UserMockService extends UserServiceInterface {
    constructor(private http: HttpClient) {
        super();
    }

    loadUsers(criteria: UserCriteria): Observable<User[]> {
        return this.http.get(`${ this.userUrl }`).pipe(
            map((users: User[]) => paginate<User>(users, criteria.paginator))
        );
    }

    loadUser(user: User): Observable<User> {
        return this.http.get(`${ this.userUrl }/${ user.id }`).pipe(
            map((user: User) => user)
        );
    }

    addUser(user: User): Observable<User> {
        return this.http.post(`${ this.userUrl }`, user).pipe(
            map((user: User) => user)
        );
    }

    updateUser(user: User): Observable<User> {
        return this.http.put(`${ this.userUrl }/${ user.id }`, user).pipe(
            map((user: User) => user)
        );
    }

    removeUser(user: User): Observable<User> {
        return this.http.delete(`${ this.userUrl }/${ user.id }`).pipe(
            map((user: User) => user)
        );
    }
}
