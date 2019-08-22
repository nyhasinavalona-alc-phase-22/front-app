import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Sort } from '../../types/sort.interface';

@Component({
    selector: 'app-data-list',
    templateUrl: './data-list.component.html',
    styleUrls: ['./data-list.component.scss']
})
export class DataListComponent<T> {
    @Input() items: T[];
    @Input() displayedColumns: string[];
    @Input() dataSource: DataSource<T>;
    @Output() selection: EventEmitter<T> = new EventEmitter<T>();
    @Output() sort: EventEmitter<Sort> = new EventEmitter<Sort>();

    onClick(row: T) {
        this.selection.emit(row);
    }

    onSort(sort: Sort) {
        this.sort.emit(sort);
    }
}
