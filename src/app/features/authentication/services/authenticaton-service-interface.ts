import { Observable } from 'rxjs';
import { User } from '../../access-management/types/user.interface';

export interface AuthenticatonServiceInterface {
    signIn(payload: { userName: string, password: string }): Observable<User>;
}
