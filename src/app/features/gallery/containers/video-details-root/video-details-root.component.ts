import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/core/store/reducers/app.reducers';
import { updateVideo } from '../../store/actions/video.actions';
import {
  getLoadingVideo,
  getVideo,
} from '../../store/selectors/video.selectors';
import { Video } from '../../types/video.interface';

@Component({
  selector: 'app-video-details-root',
  templateUrl: './video-details-root.component.html',
  styleUrls: ['./video-details-root.component.scss'],
})
export class VideoDetailsRootComponent implements OnInit {
  video$: Observable<Video>;
  loadingVideo$: Observable<boolean>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.video$ = this.store.pipe(select(getVideo));
    this.loadingVideo$ = this.store.pipe(select(getLoadingVideo));
  }

  onPin(video: Video) {
    this.store.dispatch(updateVideo({ video }));
  }
}
