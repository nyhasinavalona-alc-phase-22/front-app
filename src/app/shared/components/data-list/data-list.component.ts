import { Component, Input } from '@angular/core';
import { DataSource } from '@angular/cdk/table';

@Component({
    selector: 'app-data-list',
    templateUrl: './data-list.component.html',
    styleUrls: ['./data-list.component.scss']
})
export class DataListComponent<T> {
    @Input() items: T[];
    @Input() displayedColumns: string[];
    @Input() dataSource: DataSource<T>;
}
