import { PrivilegeCategories, Privileges } from '../constants/privileges.constants';

export interface Privilege {
    id?: any;
    label?: string;
    name: Privileges;
    category?: PrivilegeCategories;
}
