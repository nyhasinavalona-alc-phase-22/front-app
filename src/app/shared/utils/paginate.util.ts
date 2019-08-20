import { Paginator } from '../types/paginator.interface';

export const paginate = <T>(items: T[], paginator: Paginator) => {
    const start = paginator.pageSize * (paginator.page) - 1;
    const end = start + paginator.pageSize;
    return items.slice(start, end);
};
