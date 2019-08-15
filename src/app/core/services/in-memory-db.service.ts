import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../../features/authentication/types/user.interface';

@Injectable()
export class InMemoryDBService implements InMemoryDbService {
    createDb(): {} {
        const users: User[] = [
            {
                userName: 'nyhasinavalona',
                password: 'password'
            }
        ];
        return { users };
    }
}
