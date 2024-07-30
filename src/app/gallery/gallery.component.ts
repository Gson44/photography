import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryId = 'myLightbox';
  items: GalleryItem[] = [];

  constructor(public gallery: Gallery) { }

  ngOnInit() {
    // Load items into gallery
    this.items = [
      new ImageItem({ src: 'https://th.bing.com/th/id/OIP.tLotgCDtzgTdwJcTiXWRCwHaEK?w=267&h=180&c=7&r=0&o=5&pid=1.7', thumb: 'https://th.bing.com/th/id/OIP.tLotgCDtzgTdwJcTiXWRCwHaEK?w=267&h=180&c=7&r=0&o=5&pid=1.7' }),
      new ImageItem({ src: 'me.jpg', thumb: 'me.jpg' }),
      // Add more items as needed
    ];

    const galleryRef = this.gallery.ref(this.galleryId);
    galleryRef.load(this.items);
  }
}
