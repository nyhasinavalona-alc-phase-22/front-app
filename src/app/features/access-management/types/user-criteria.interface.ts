import { Paginator } from '../../../shared/types/paginator.interface';
import { Sort } from '../../../shared/types/sort.interface';

export interface UserCriteria {
    paginator: Paginator;
    sort?: Sort;
}
