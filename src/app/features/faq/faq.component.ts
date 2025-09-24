
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type QA = { q: string; a: string };

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
})
export class FaqComponent {
  faqs: QA[] = [
    {
      q: 'How long does production take?',
      a: 'Standard production is 3–4 weeks. Custom orders may take longer, but we always provide an exact timeline before starting.'
    },
    {
      q: 'Why is solid wood better than chipboard ?',
      a: 'Solid wood is stronger, more durable, and longer-lasting than particleboard. It resists moisture, wear, and damage better, can be polished or repaired, and generally has a more refined appearance, whereas particleboard is cheaper but less sturdy and more prone to swelling or breaking.'
    },
    {
      q: 'Is installation included?',
      a: 'Absolutely. Delivery and professional installation are part of the package, with a 7-year warranty.'
    },
    {
      q: 'How do I find out if the kitchen set fits my kitchen?',
      a: '3D visualization design will help, it is just free from us — and it lets you clearly see how the kitchen set will fit and look in your space before making a decision.'
    }
  ];

  openIndex: number | null = null;

  toggle(i: number) {
    this.openIndex = this.openIndex === i ? null : i;
  }
}
