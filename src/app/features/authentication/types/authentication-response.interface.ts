import { User } from '../../access-management/types/user.interface';

export interface AuthenticationResponse {
    user: User;
    token: string;
}
