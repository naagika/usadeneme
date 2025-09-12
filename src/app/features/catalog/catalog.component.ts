import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';


type Item = {
  id: string;
  title: string;
  img: string;
  group: 'Kitchen' | 'Bathroom';
  priceFrom?: number;
  badge?: 'Bestseller' | 'New' | 'Sale';
  // optional: subtype if нужно (Base/Tall/Wall/Glass/Vanity/Combo)
  subtype?: 'Base' | 'Tall' | 'Wall' | 'GlassDoor' | 'VanityBase' | 'VanitySinkCombos';
};
@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
    categories = ['All', 'Kitchen', 'Bathroom'] as const;
  active = signal<typeof this.categories[number]>('All');

  items: Item[] = [
    { id: 'base-1',  title: 'Base Cabinets',            img: 'assets/catalog/base.png',         group: 'Kitchen',  priceFrom: 2999, badge: 'Bestseller', subtype: 'Base' },
    { id: 'tall-1',  title: 'Tall Cabinets',            img: 'assets/catalog/tall.png',         group: 'Kitchen',  priceFrom: 2490, badge: 'Sale',       subtype: 'Tall' },
    { id: 'wall-1',  title: 'Wall Cabinets',            img: 'assets/catalog/wall.png',         group: 'Kitchen',  priceFrom: 1840,                       subtype: 'Wall' },
    { id: 'glass-1', title: 'Glass Door Wall Cabinets', img: 'assets/catalog/glass.png',   group: 'Kitchen',  priceFrom: 2040,                       subtype: 'GlassDoor' },
    { id: 'van-1',   title: 'Vanity Base Cabinets',     img: 'assets/catalog/vanity-base.png',  group: 'Bathroom', priceFrom:  840,                       subtype: 'VanityBase' },
    { id: 'combo-1', title: 'Vanity Sink Base Combos',  img: 'assets/catalog/vanity-combo.png', group: 'Bathroom', priceFrom: 1390, badge: 'New',        subtype: 'VanitySinkCombos' },
  ];

 filtered = computed(() =>
    this.active() === 'All' ? this.items : this.items.filter(i => i.group === this.active())
  );
}
