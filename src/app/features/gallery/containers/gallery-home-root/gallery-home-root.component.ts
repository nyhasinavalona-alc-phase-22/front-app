import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/core/store/reducers/app.reducers';
import {
  getLoadingVideos,
  getVideos,
} from '../../store/selectors/video.selectors';
import { Video } from '../../types/video.interface';

@Component({
  selector: 'app-gallery-home-root',
  templateUrl: './gallery-home-root.component.html',
  styleUrls: ['./gallery-home-root.component.scss'],
})
export class GalleryHomeRootComponent implements OnInit {
  videos$: Observable<Video[]>;
  loadingVideos$: Observable<boolean>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.videos$ = this.store.pipe(select(getVideos));
    this.loadingVideos$ = this.store.pipe(select(getLoadingVideos));
  }
}
