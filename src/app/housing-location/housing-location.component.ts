import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <img class="listing-photo" />
      <h2 class="listing-heading"></h2>
      <p class="listing-location"></p>
    </section>
  `,
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {}
