import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Video } from '../../types/video.interface';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent implements OnChanges {
  @Input() videos: Video[];
  @Input() loading: boolean;

  constructor(private spinner: NgxSpinnerService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.loading) {
      this.spinner.show();
    } else {
      this.spinner.hide();
    }
  }
}
