import { Privilege } from '../../access-management/types/privilege.interface';
import {
    PrivilegeCategories,
    Privileges,
    PRIVILGE_LABELS
} from '../../access-management/constants/privileges.constants';

export const PRIVILEGES: Privilege[] = [
    {
        id: 1,
        name: Privileges.SAMPLE,
        label: PRIVILGE_LABELS[Privileges.SAMPLE],
        category: PrivilegeCategories.SAMPLE
    }
];
