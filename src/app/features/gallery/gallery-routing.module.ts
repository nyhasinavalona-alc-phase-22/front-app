import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryHomeRootComponent } from './containers/gallery-home-root/gallery-home-root.component';
import { VideoDetailsRootComponent } from './containers/video-details-root/video-details-root.component';

const routes: Routes = [
  {
    path: '',
    component: GalleryHomeRootComponent,
  },
  {
    path: 'details/:videoId',
    component: VideoDetailsRootComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleryRoutingModule {}
