import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticatonServiceInterface } from './authenticaton-service-interface';
import { User } from '../types/user.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class AuthenticationMockService implements AuthenticatonServiceInterface {

    constructor(private http: HttpClient) {
    }

    signIn(payload: { userName: string; password: string }): Observable<User> {
        return this.http.get(`${ environment.baseUrl }/users`).pipe(
            map((users: User[]) =>
                users.find(user => user.userName === payload.userName && user.password === payload.password)),
            tap((user) => {
                if (!user) {
                    throw new Error('user name / password invalid.');
                }
            })
        );
    }
}
