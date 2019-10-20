import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../../types/video.interface';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
})
export class VideoCardComponent implements OnInit {
  @Input() video: Video;

  constructor() {}

  ngOnInit() {}
}
