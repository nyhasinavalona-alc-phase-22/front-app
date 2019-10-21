import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  value: string;

  constructor() {}

  ngOnInit() {}

  onSearch(event: KeyboardEvent) {
    this.search.emit(this.value);
  }
}
