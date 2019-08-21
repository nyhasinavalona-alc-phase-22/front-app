import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Paginator } from '../../types/paginator.interface';

const PAGINATOR_SIZE = 5;
const PAGE_SIZE_OPTIONS = [15, 30, 45];

@Component({
    selector: 'app-paginator',
    templateUrl: './paginator.component.html',
    styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnChanges {
    @Input() total: number;
    @Input() page = 1;
    pageSize = 15;
    @Output() paginate: EventEmitter<Paginator> = new EventEmitter<Paginator>();
    pageSizeOptions = PAGE_SIZE_OPTIONS;
    pages: number[] = [];
    nbPage: number;
    start: number;
    end: number;

    @Input() set setPageSize(pageSize) {
        const prevPageSize = this.pageSize;
        this.pageSize = pageSize || 15;
        if (prevPageSize !== this.pageSize) {
            this.pageSizeOptions =
                pageSize !== null ? [...PAGE_SIZE_OPTIONS, pageSize] : PAGE_SIZE_OPTIONS;
            setTimeout(() => {
                this.paginate.emit({
                    page: this.page,
                    pageSize: +this.pageSize
                });
            }, 50);
        }
    }

    ngOnChanges() {
        this.updatePages();
    }

    setPage(page: number) {
        this.page = page;
        this.paginate.emit({
            page: this.page,
            pageSize: +this.pageSize
        });
        this.updatePages();
    }

    morePagesForward() {
        this.setPage(this.end + Math.ceil(PAGINATOR_SIZE / 2));
    }

    morePagesBackward() {
        this.setPage(this.start - Math.ceil(PAGINATOR_SIZE / 2));
    }

    private generatePages(start: number, end: number): number[] {
        return Array.from(new Array(end + 1 - start), (x, i) => start + i);
    }

    private updatePages() {
        this.nbPage = Math.ceil(this.total / this.pageSize);
        this.validatePage();
        if (this.nbPage === 0) {
            this.pages = [];
        } else if (this.page <= PAGINATOR_SIZE) {
            this.start = 1;
            this.end = this.nbPage > PAGINATOR_SIZE ? PAGINATOR_SIZE : this.nbPage;
            this.pages = this.generatePages(this.start, this.end);
        } else if (this.page + PAGINATOR_SIZE / 2 < this.nbPage) {
            this.start = Math.ceil(this.page - PAGINATOR_SIZE / 2);
            this.end = Math.ceil(this.page + PAGINATOR_SIZE / 2 - 1);
            this.pages = this.generatePages(this.start, this.end);
        } else {
            this.start = this.nbPage + 1 - PAGINATOR_SIZE;
            this.end = this.nbPage;
            this.pages = this.generatePages(this.start, this.end);
        }
    }

    private validatePage() {
        this.page > this.nbPage && (this.page = this.nbPage);
        this.page < 1 && (this.page = 1);
    }

}
