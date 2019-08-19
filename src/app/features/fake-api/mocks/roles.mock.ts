import { Role } from '../../access-management/types/role.interface';
import { PRIVILEGES } from './privileges.mock';

export const ROLES: Role[] = [
    {
        id: 1,
        name: 'administrator',
        label: 'administrateur',
        privileges: [
            ...PRIVILEGES
        ]
    }
];
