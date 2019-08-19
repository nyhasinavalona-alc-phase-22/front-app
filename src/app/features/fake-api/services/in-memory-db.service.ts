import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { USERS } from '../mocks/users.mock';
import { ROLES } from '../mocks/roles.mock';
import { PRIVILEGES } from '../mocks/privileges.mock';

@Injectable()
export class InMemoryDBService implements InMemoryDbService {
    createDb(): {} {
        return { users: USERS, roles: ROLES, privileges: PRIVILEGES };
    }
}
