import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticatonServiceInterface } from './authenticaton-service-interface';
import { Observable } from 'rxjs';
import { AuthenticationResponse } from '../types/authentication-response.interface';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import { User } from '../../access-management/types/user.interface';

@Injectable()
export class AuthenticationMockService implements AuthenticatonServiceInterface {

    constructor(private http: HttpClient) {
    }

    signIn(payload: { userName: string; password: string }): Observable<AuthenticationResponse> {
        return this.http.get(`${ environment.baseUrl }/users`).pipe(
            map((users: User[]) => users.find(u => u.userName === payload.userName)),
            map((user: User) => ({ user, token: 'token' }))
        );
    }
}
