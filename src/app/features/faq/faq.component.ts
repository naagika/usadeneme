
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
      q: 'Do you really use solid wood?',
      a: 'Yes, we craft cabinets from solid hardwoods like oak, walnut, and maple. No MDF in structural parts.'
    },
    {
      q: 'Is installation included?',
      a: 'Absolutely. Delivery and professional installation are part of the package, with a 7-year warranty.'
    },
    {
      q: 'Can I see a 3D design before ordering?',
      a: 'Of course! Every client receives a free 3D visualization after measurement so you can preview your kitchen.'
    }
  ];

  openIndex: number | null = null;

  toggle(i: number) {
    this.openIndex = this.openIndex === i ? null : i;
  }
}
