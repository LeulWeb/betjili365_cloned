import { Component } from '@angular/core';
import { HeroSlider } from "../../components/hero-slider/hero-slider";
import { TabComponent } from '../../components/tab-component/tab-component';
import { FavComponent } from '../../components/fav-component/fav-component';

@Component({
  selector: 'app-home-page',
  imports: [HeroSlider, TabComponent, FavComponent],
  templateUrl: './home-page.html',
  styles: ``,
})
export class HomePage {

}
