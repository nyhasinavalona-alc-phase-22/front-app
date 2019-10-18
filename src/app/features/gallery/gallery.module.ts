import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryHomeRootComponent } from './containers/gallery-home-root/gallery-home-root.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoCardComponent } from './components/video-card/video-card.component';


@NgModule({
  declarations: [GalleryHomeRootComponent, VideoListComponent, VideoCardComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule { }
