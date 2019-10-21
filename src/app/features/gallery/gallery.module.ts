import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from 'src/app/shared/shared.module';
import { RankingComponent } from './components/ranking/ranking.component';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { VideoDetailComponent } from './components/video-detail/video-detail.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { GalleryHomeRootComponent } from './containers/gallery-home-root/gallery-home-root.component';
import { VideoDetailsRootComponent } from './containers/video-details-root/video-details-root.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { VideoService } from './services/video.service';
import { VideoRouterEffects } from './store/effects/video-router.effects';
import { VideoEffects } from './store/effects/video.effects';

@NgModule({
  declarations: [
    GalleryHomeRootComponent,
    VideoListComponent,
    VideoCardComponent,
    VideoDetailsRootComponent,
    VideoDetailComponent,
    RankingComponent,
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    SharedModule,
    EffectsModule.forFeature([VideoEffects, VideoRouterEffects]),
    NgxSpinnerModule,
  ],
  providers: [VideoService],
})
export class GalleryModule {}
