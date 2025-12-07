import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-slider',
  imports: [CommonModule],
  templateUrl: './hero-slider.html',
  standalone: true,
})
export class HeroSlider implements OnInit, OnDestroy {
  slides = [
    'assets/images/hero_sliders/1.png',
    'assets/images/hero_sliders/2.png',
    'assets/images/hero_sliders/3.png',
    'assets/images/hero_sliders/4.png',
    'assets/images/hero_sliders/5.png',
    'assets/images/hero_sliders/6.png',
    'assets/images/hero_sliders/7.png',
    'assets/images/hero_sliders/8.png',
    'assets/images/hero_sliders/9.png',
    'assets/images/hero_sliders/10.png',
    'assets/images/hero_sliders/11.png',
    'assets/images/hero_sliders/12.png',
  ];

  currentIndex = signal(0);
  private intervalId?: number;

  ngOnInit() {
    this.startAutoSlide();
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
    this.currentIndex.set((this.currentIndex() + 1) % this.slides.length);
  }

  prevSlide() {
    this.currentIndex.set(
      (this.currentIndex() - 1 + this.slides.length) % this.slides.length
    );
  }

  goToSlide(index: number) {
    this.currentIndex.set(index);
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  getTransform() {
    // Calculate offset to center the active slide and show adjacent slides
    // Each slide is 70% width, so we need to offset by 15% to center it
    const slideWidth = 70; // percentage
    const offset = this.currentIndex() * slideWidth;
    return `translateX(calc(15% - ${offset}%))`;
  }
}
