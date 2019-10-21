import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Video } from '../../types/video.interface';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss'],
})
export class VideoDetailComponent implements OnChanges {
  @Input() video: Video;
  @Input() loading: boolean;
  @Output() pin: EventEmitter<Video> = new EventEmitter<Video>();

  constructor(private spinner: NgxSpinnerService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.loading) {
      this.spinner.show();
    } else {
      this.spinner.hide();
    }
  }

  onPin() {
    this.pin.emit({ ...this.video, pined: !this.video.pined });
  }
}
