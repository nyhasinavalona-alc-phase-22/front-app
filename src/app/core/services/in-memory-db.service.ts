import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../../features/access-management/types/user.interface';
import {
    PrivilegeCategories,
    Privileges,
    PRIVILGE_LABELS
} from '../../features/access-management/constants/privileges.constants';

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
                            label: PRIVILGE_LABELS[Privileges.SAMPLE],
                            category: PrivilegeCategories.SAMPLE
                        }
                    ]
                }
            },
            {
                id: 2,
                userName: 'user',
                password: 'password',
                email: 'user@mail.com',
                fullName: 'first name last name',
                firstName: 'first name',
                lastName: 'last name',
                role: {
                    id: 1,
                    label: 'Administrateur',
                    name: 'administrator',
                    privileges: [
                        {
                            id: 1,
                            label: PRIVILGE_LABELS[Privileges.SAMPLE],
                            category: PrivilegeCategories.SAMPLE,
                            name: Privileges.SAMPLE
                        }
                    ]
                }
            }
        ];
        return { users };
    }
}
