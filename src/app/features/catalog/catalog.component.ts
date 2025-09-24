import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { ModalComponent } from "./modal/modal.component";


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
  imports: [CommonModule, ModalComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
    categories = ['All', 'Kitchen', 'Bathroom'] as const;
  active = signal<typeof this.categories[number]>('All');

  items: Item[] = [
    { id: 'base-1',  title: 'Base Cabinets',            img: 'assets/catalog/tall.png',         group: 'Kitchen',  priceFrom: 2999, badge: 'Bestseller', subtype: 'Base' },
    { id: 'tall-1',  title: 'Tall Cabinets',            img: 'assets/catalog/tall.jpeg',         group: 'Kitchen',  priceFrom: 2490, badge: 'Sale',       subtype: 'Tall' },
    { id: 'wall-1',  title: 'Wall Cabinets',            img: 'assets/catalog/wall.png',         group: 'Kitchen',  priceFrom: 2540,                       subtype: 'Wall' },
    { id: 'glass-1', title: 'Glass Door Wall Cabinets', img: 'assets/catalog/glass.jpeg',   group: 'Kitchen',  priceFrom: 2040,                       subtype: 'GlassDoor' },
    { id: 'van-1',   title: 'Vanity Base Cabinets',     img: 'assets/catalog/vanity-base.png',  group: 'Bathroom', priceFrom:  1440,                       subtype: 'VanityBase' },
    { id: 'combo-1', title: 'Vanity Sink Base Combos',  img: 'assets/catalog/vanity-combo.png', group: 'Bathroom', priceFrom: 1390, badge: 'New',        subtype: 'VanitySinkCombos' },
  ];

 filtered = computed(() =>
    this.active() === 'All' ? this.items : this.items.filter(i => i.group === this.active())
  );
  modalVisible = false;
modalTitle = '';
modalText = '';

openDetails(item: Item) {
  this.modalTitle = item.title;

  switch (item.subtype) {
    case 'Base':
      this.modalText = `Base Cabinets:
- Available in multiple configurations: drawers, doors, sink bases, Lazy Susan, corner and trash pull-out.
- Standard sizes from 24" to 36" width, height 34.5", depth 24".
- Constructed with cabinet-grade plywood, dovetail drawers, UV clear coat finish.
- Soft-close hinges and full-extension drawer glides for durability.
- Can be customized for your kitchen layout and individual measurements.`;
      break;

    case 'Tall':
      this.modalText = `Tall Cabinets:
- Designed as pantry storage or oven housings.
- Heights up to ceiling, providing maximum vertical storage.
- Adjustable shelves included by default.
- Optional roll-out trays available as an upgrade.
- Perfect for kitchens that require extra storage or integrated oven space.
- Available in standard and custom sizes to fit your project.`;
      break;

    case 'Wall':
      this.modalText = `Wall Cabinets:
- Height options: 12" to 42".
- Available as 1-door or 2-door units.
- Stackable configurations for design flexibility.
- Includes adjustable shelves for versatile storage.
- Can be combined with glass doors or accessories.
- Custom sizing available for unique wall layouts.`;
      break;

    case 'GlassDoor':
      this.modalText = `Glass Door Wall Cabinets:
- Elegant frosted glass fronts.
- Available in 30", 36", and 42" heights.
- Option to upgrade to a finished interior for a premium look.
- Perfect for display of glassware or décor.
- Can be paired with solid wall cabinets for contrast.
- Available in different widths or tailored to your project.`;
      break;

    case 'VanityBase':
      this.modalText = `Vanity Base Cabinets:
- Designed for bathrooms: 1-door / 1-drawer or 3-drawer options.
- Standard height: 34.5", depth: 21".
- Provides compact yet functional storage.
- Durable construction with moisture-resistant finishes.
- Available in different widths and customizable to bathroom dimensions.`;
      break;

    case 'VanitySinkCombos':
      this.modalText = `Vanity Sink Base Combos:
- Sizes range from 30" to 60" wide.
- Configurations: 2 doors with drawers, or double sink versions with multiple drawer layouts.
- Designed for easy integration with bathroom sinks and countertops.
- Storage optimized for plumbing cut-outs and organization.
- Available in several layouts, colors, and finishes.
- Can be customized for your bathroom space.`;
      break;

    default:
      this.modalText = `For more details, please refer to the Spec Book or contact our team for custom solutions.`;
  }

  this.modalVisible = true;
}


}
