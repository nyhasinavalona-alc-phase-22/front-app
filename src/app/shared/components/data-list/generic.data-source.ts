import { DataSource } from '@angular/cdk/table';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CollectionViewer } from '@angular/cdk/collections';

export class GenericDataSource<T> implements DataSource<T> {
    constructor(private store: Store<object>, private selector: Function) {
    }

    connect(collectionViewer: CollectionViewer): Observable<T[]> {
        return this.store.pipe(select(this.selector));
    }

    disconnect(collectionViewer: CollectionViewer): void {
    }
}

