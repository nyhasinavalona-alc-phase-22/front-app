import { Privilege } from './privilege.interface';

export interface Role {
    id?: any;
    label?: string;
    name: string;
    privileges?: Privilege[];
}
