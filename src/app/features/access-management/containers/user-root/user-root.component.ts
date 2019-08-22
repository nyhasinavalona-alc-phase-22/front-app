import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { UserState } from '../../store/reducers/user.reducers';
import { Observable } from 'rxjs';
import { User } from '../../types/user.interface';
import { getTotalItems, getUsers } from '../../store/selectors/user.selectors';
import { GenericDataSource } from '../../../../shared/components/data-list/generic.data-source';
import { Paginator } from '../../../../shared/types/paginator.interface';
import { loadUsers } from '../../store/actions/user.actions';
import { Sort } from '../../../../shared/types/sort.interface';
import { UserCriteria } from '../../types/user-criteria.interface';

@Component({
    selector: 'app-user-root',
    templateUrl: './user-root.component.html',
    styleUrls: ['./user-root.component.scss']
})
export class UserRootComponent implements OnInit {
    users$: Observable<User[]>;
    totalItems$: Observable<number>;
    displayedColumns = ['userName', 'email', 'fullName'];
    criteria: UserCriteria = { paginator: { page: 1, pageSize: 15 }, sort: undefined };
    dataSource: GenericDataSource<User>;

    constructor(private userStore: Store<UserState>) {
    }

    ngOnInit() {
        this.users$ = this.userStore.pipe(select(getUsers));
        this.totalItems$ = this.userStore.pipe(select(getTotalItems));
        this.dataSource = new GenericDataSource<User>(this.userStore, getUsers);
    }

    onPaginate(paginator: Paginator) {
        this.criteria = { ...this.criteria, paginator };
        this.userStore.dispatch(loadUsers(this.criteria));
    }

    onSelection(user: User) {
        console.log(user);
    }

    onSort(sort: Sort) {
        this.criteria = { ...this.criteria, sort };
        this.userStore.dispatch(loadUsers(this.criteria));
    }
}
