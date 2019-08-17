import { PrivilegeCategories, Privileges } from '../../authentication/constants/privileges.constants';

export interface Privilege {
    id?: any;
    label?: string;
    name: Privileges;
    category?: PrivilegeCategories;
}
