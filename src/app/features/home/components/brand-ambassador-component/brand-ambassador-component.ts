import { Component } from '@angular/core';

@Component({
  selector: 'app-brand-ambassador-component',
  imports: [],
  templateUrl: './brand-ambassador-component.html',
  styles: ``,
})
export class BrandAmbassadorComponent {

  protected amabasadorList = [
    {
      name : "Sunny Leone",
      role: "Actress",
      timeline: "(2024–Present)",
      signature: "assets/images/signatures/ambassadors-sunny-leone.png"
    },
    {
      name: "Nussrat Jahan",
      role: "Bengali Actress",
      timeline: "(2025–Present)",
      signature: "assets/images/signatures/ambassadors-nussrat-jahan-signature.png"
    },
    {
      name: "Quinton de Kock",
      role: "South African Cricketer",
      timeline: "(2024–2025)",
      signature: "assets/images/signatures/ambassadors-quinton-de-kock.png"
    },
    {
      name: "David De Gea",
      role: "Spanish Footballer",
      timeline: "(2024–2025)",
      signature: "assets/images/signatures/ambassadors-david-de-gea.png"
    },
    {
      name: "Monami Ghosh",
      role: "Film & Television Superstar",
      timeline: '(2024–2025)',
      signature: "assets/images/signatures/ambassadors-monami-ghosh.png"
    }
  ]

}
