import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../../features/access-management/types/user.interface';
import { PrivilegeCategories, Privileges } from '../../features/access-management/constants/privileges.constants';

@Injectable()
export class InMemoryDBService implements InMemoryDbService {
    createDb(): {} {
        const users: User[] = [
            {
                id: 1,
                userName: 'nyhasinavalona',
                password: 'password',
                role: {
                    id: 2,
                    label: 'Administrateur',
                    name: 'administrator',
                    privileges: [
                        {
                            id: 1,
                            name: Privileges.SAMPLE,
                            label: 'Lorem ipsum',
                            category: PrivilegeCategories.SAMPLE
                        }
                    ]
                }
            }
        ];
        return { users };
    }
}
