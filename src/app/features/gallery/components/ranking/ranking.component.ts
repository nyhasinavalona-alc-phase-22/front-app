import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
})
export class RankingComponent {
  active: number[];
  inactive: number[];
  @Input() set stars(value: number) {
    this.active = new Array(value).fill(1);
    this.inactive = new Array(5 - value).fill(1);
  }
  @Input() views: number;
}
