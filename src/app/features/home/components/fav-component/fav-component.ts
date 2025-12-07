import {
  Component,
  OnInit,
  OnDestroy,
  signal,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fav-component',
  imports: [CommonModule],
  templateUrl: './fav-component.html',
  standalone: true,
})
export class FavComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('carouselTrack') carouselTrack?: ElementRef<HTMLDivElement>;

  originalImages = [
    'assets/images/favs/image_276679.jpg',
    'assets/images/favs/image_297503.jpg',
    'assets/images/favs/image_305668.jpg',
    'assets/images/favs/image_311068.jpg',
    'assets/images/favs/image_311678.jpg',
    'assets/images/favs/image_317060.jpg',
    'assets/images/favs/image_317741.jpg',
    'assets/images/favs/image_317854.jpg',
  ];

  // Duplicate images for seamless infinite scroll
  images = [...this.originalImages, ...this.originalImages];

  currentIndex = signal(0);
  private intervalId?: number;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngAfterViewInit() {
    // Listen for transition end to reset position seamlessly
    if (this.carouselTrack?.nativeElement) {
      this.carouselTrack.nativeElement.addEventListener(
        'transitionend',
        () => this.handleTransitionEnd()
      );
    }
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = window.setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  nextSlide() {
    this.currentIndex.set(this.currentIndex() + 1);
  }

  handleTransitionEnd() {
    // When we reach the duplicated set, jump back to the start without animation
    if (this.currentIndex() >= this.originalImages.length) {
      const track = this.carouselTrack?.nativeElement;
      if (track) {
        track.style.transition = 'none';
        this.currentIndex.set(0);
        // Force reflow to apply the change
        void track.offsetHeight;
        // Re-enable transition after a brief moment
        setTimeout(() => {
          track.style.transition = '';
        }, 50);
      }
    }
  }

  getTransform() {
    return `translateX(-${this.currentIndex() * 33.333}%)`;
  }
}
