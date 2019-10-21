import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadVideos } from 'src/app/features/gallery/store/actions/video.actions';
import { State } from '../../store/reducers/app.reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home-root.component.html',
  styleUrls: ['./home-root.component.scss'],
})
export class HomeRootComponent {
  constructor(private store: Store<State>) {}
  onSearch(title: string) {
    this.store.dispatch(loadVideos({ filters: { title } }));
  }
}
