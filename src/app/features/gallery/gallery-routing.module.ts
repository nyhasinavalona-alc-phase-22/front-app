import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryHomeRootComponent } from './containers/gallery-home-root/gallery-home-root.component';

const routes: Routes = [
  {
    path: '',
    component: GalleryHomeRootComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleryRoutingModule {}
