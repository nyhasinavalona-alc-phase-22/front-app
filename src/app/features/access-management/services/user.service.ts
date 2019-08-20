import { Injectable } from '@angular/core';
import { UserServiceInterface } from './user-service.type';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/user.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse } from '../../../shared/types/api-response.interface';
import { UserCriteria } from '../types/user-criteria.interface';

@Injectable()
export class UserService extends UserServiceInterface {
    constructor(private http: HttpClient) {
        super();
    }

    loadUsers(criteria: UserCriteria): Observable<User[]> {
        return this.http.get(`${ this.userUrl }`).pipe(
            map((response: ApiResponse) => response.data)
        );
    }

    loadUser(user: User): Observable<User> {
        return this.http.get(`${ this.userUrl }/${ user.id }`).pipe(
            map((response: ApiResponse) => response.data)
        );
    }

    addUser(user: User): Observable<User> {
        return this.http.post(`${ this.userUrl }`, user).pipe(
            map((response: ApiResponse) => response.data)
        );
    }

    updateUser(user: User): Observable<User> {
        return this.http.put(`${ this.userUrl }/${ user.id }`, user).pipe(
            map((response: ApiResponse) => response.data)
        );
    }

    removeUser(user: User): Observable<User> {
        return this.http.delete(`${ this.userUrl }/${ user.id }`).pipe(
            map((response: ApiResponse) => response.data)
        );
    }
}
