import { Observable } from 'rxjs';
import { User } from '../types/user.interface';

export interface AuthenticatonServiceInterface {
    signIn(payload: { userName: string, password: string }): Observable<User>;
}
