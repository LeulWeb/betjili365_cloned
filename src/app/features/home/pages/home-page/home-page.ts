import { Component } from '@angular/core';
import { HeroSlider } from "../../components/hero-slider/hero-slider";
import { TabComponent } from '../../components/tab-component/tab-component';

@Component({
  selector: 'app-home-page',
  imports: [HeroSlider, TabComponent],
  templateUrl: './home-page.html',
  styles: ``,
})
export class HomePage {

}
