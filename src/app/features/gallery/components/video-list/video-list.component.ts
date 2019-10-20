import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../../types/video.interface';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent implements OnInit {
  @Input() videos: Observable<Video[]>;

  constructor() {}

  ngOnInit() {}
}
