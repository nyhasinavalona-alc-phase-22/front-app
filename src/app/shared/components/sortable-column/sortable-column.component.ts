import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Sort } from '../../types/sort.interface';

@Component({
    selector: 'app-sortable-column, [sortable]',
    templateUrl: './sortable-column.component.html',
    styleUrls: ['./sortable-column.component.scss']
})
export class SortableColumnComponent {
    direction = 1;
    @Input() sortable: string;
    @Output() sort: EventEmitter<Sort> = new EventEmitter<Sort>();

    @HostListener('click') onClick() {
        this.sort.emit({ key: this.sortable, direction: this.direction });
        this.direction = -this.direction;
    }
}
