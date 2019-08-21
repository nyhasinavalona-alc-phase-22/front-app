import { Observable } from 'rxjs';
import { User } from '../types/user.interface';
import { environment } from '../../../../environments/environment';
import { UserCriteria } from '../types/user-criteria.interface';
import { Paginated } from '../../../shared/types/paginated.interface';

export abstract class UserServiceInterface {
    userUrl = `${ environment.baseUrl }/users`;

    abstract loadUsers(criteria: UserCriteria): Observable<Paginated<User>>;

    abstract loadUser(user: User): Observable<User>;

    abstract addUser(user: User): Observable<User>;

    abstract updateUser(user: User): Observable<User>;

    abstract removeUser(user: User): Observable<User>;
}
