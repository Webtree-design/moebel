import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.scss'],
})
export class CaruselComponent {
  imageWidth: any = 1280 / 3; // carusel icons sind noch ein bug
  width: any;
  constructor(public router: Router) {}
  @ViewChild('image') slider!: NgImageSliderComponent;

  @HostListener('window:resize', ['$event'])
  onWindowSize(event: any) {
    this.width = window.innerWidth;
    if (this.width <= 1024) {
      return (this.imageWidth = this.width);
    }
    if (this.width <= 1280) {
      this.imageWidth = this.width / 3;
    }
  }
  @HostListener('window:load', ['$event'])
  onWindowLoad(event: any) {
    this.width = window.innerWidth;

    if (this.width <= 1024) {
      return (this.imageWidth = this.width);
    }
    if (this.width <= 1280) {
      this.imageWidth = this.width / 3;
    }
  }

  imageObject: Array<object> = [
    {
      image: '../../../../assets/webtree/Harley.png',
      thumbImage: '../../../../assets/webtree/Harley.png',
      alt: 'alt',
      title: 'title',
      src: 'www.moebel.de',
    },
    {
      image: '../../../../assets/webtree/Develope.jpg',
      thumbImage: '../../../../assets/webtree/Develope.jpg',
      alt: 'alt',
      title: 'title',
      src: 'www.moebel.de',
    },
    {
      image: '../../../../assets/webtree/skizze.jpg',
      thumbImage: '../../../../assets/webtree/skizze.jpg',
      alt: 'alt',
      title: 'title',
      src: 'www.moebel.de',
    },
    {
      image: '../../../../assets/webtree/ready.jpg',
      thumbImage: '../../../../assets/webtree/ready.jpg',
      alt: 'alt',
      title: 'title',
      src: 'www.moebel.de',
    },
    {
      image: '../../../../assets/webtree/logo.png',
      thumbImage: '../../../../assets/webtree/logo.png',
      alt: 'alt',
      title: 'title',
      src: 'www.moebel.de',
    },
    {
      image: '../../../../assets/webtree/logo.png',
      thumbImage: '../../../../assets/webtree/logo.png',
      alt: 'alt',
      title: 'title',
      src: 'www.moebel.de',
    },
  ];

  imageSliderClick(event: any) {
    switch (event) {
      case 0:
    
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
    }
  }

  prevImageClick() {
    this.slider.prev();
  }

  nextImageClick() {
    this.slider.next();
  }
}
