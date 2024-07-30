import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WhoamiComponent } from './whoami/whoami.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryModule, GALLERY_CONFIG, GalleryConfig } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WhoamiComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GalleryModule,
    CommonModule,
    GalleryModule,
    LightboxModule
  ],
  providers: [{
    provide: GALLERY_CONFIG,
    useValue: {
      autoHeight: true,
      imageSize: 'cover',
      // Add other configuration options here
    } as GalleryConfig,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
