import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryHomeRootComponent } from './containers/gallery-home-root/gallery-home-root.component';


@NgModule({
  declarations: [GalleryHomeRootComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule { }
