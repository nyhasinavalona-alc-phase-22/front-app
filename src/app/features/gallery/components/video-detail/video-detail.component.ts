import { Component, Input } from '@angular/core';
import { Video } from '../../types/video.interface';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss'],
})
export class VideoDetailComponent {
  @Input() video: Video;
}
