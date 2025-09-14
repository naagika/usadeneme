import { Component, OnDestroy, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

type Review = {
  name: string;
  city?: string;
  rating: 1|2|3|4|5;
  text: string;
  avatar?: string; // assets path (optional)
};

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
})
export class ReviewsComponent implements OnInit, OnDestroy {
  reviews: Review[] = [
    { name: 'Emily R.', city: 'Chicago, IL', rating: 5,
      text: 'Cabinets Studio transformed our kitchen. Great quality and the 3D design helped a lot!',
      //avatar: 'assets/avatars/1.jpg' },
      avatar: 'assets/logo.png' },
    { name: 'Jason K.', city: 'Naperville, IL', rating: 5,
      text: 'Precise measurement, professional installation, and solid wood. Highly recommend.',
      avatar: 'assets/logo.png' },
    { name: 'Megan S.', city: 'Evanston, IL', rating: 4,
      text: 'On time, clean work, and fair pricing. We love the new walnut cabinets!',
      avatar: 'assets/logo.png' },
  ];

  idx = signal(0);
  total = this.reviews.length;
  canPrev = computed(() => this.idx() > 0);
  canNext = computed(() => this.idx() < this.total - 1);

  private timer: any;

  go(i: number) {
    if (i < 0) i = 0;
    if (i > this.total - 1) i = this.total - 1;
    this.idx.set(i);
  }
  next() { this.go(this.idx() + 1); }
  prev() { this.go(this.idx() - 1); }

  ngOnInit() {
    // автопрокрутка каждые 6 сек
    this.timer = setInterval(() => {
      this.idx.set((this.idx() + 1) % this.total);
    }, 6000);
  }
  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
