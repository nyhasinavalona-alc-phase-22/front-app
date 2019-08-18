import { Observable } from 'rxjs';
import { User } from '../types/user.interface';
import { environment } from '../../../../environments/environment';

export abstract class UserServiceInterface {
    userUrl = `${ environment.baseUrl }/users`;

    abstract loadUsers(): Observable<User[]>;

    abstract loadUser(user: User): Observable<User>;

    abstract addUser(user: User): Observable<User>;

    abstract updateUser(user: User): Observable<User>;

    abstract removeUser(user: User): Observable<User>;
}
