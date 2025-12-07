import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { HomePage } from "../../../features/home/pages/home-page/home-page";

@Component({
  selector: 'app-layout',
  imports: [Navbar, HomePage],
  templateUrl: './layout.html',
  styles: ``,
})
export class Layout {

}
