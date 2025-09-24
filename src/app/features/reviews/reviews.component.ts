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
      text: 'I was honestly surprised by how smooth the whole process with Cabinets Studio went. Before I even made the purchase, they showed me a 3D visualization of my future kitchen, so I could see exactly how it would look. That gave me a lot of confidence. On top of that, delivery was included in the price, which saved me a good amount of money. The cabinets themselves are sturdy, stylish, and perfectly match my interior. Definitely one of the best purchases I’ve made for my home',
      //avatar: 'assets/avatars/1.jpg' },
      avatar: 'assets/Cabinetsstudio4.png' },
    { name: 'Jason K.', city: 'Naperville, IL', rating: 5,
      text: 'Cabinets Studio really paid attention to my needs. I had specific measurements and a tricky layout, but they managed to design cabinets that fit perfectly into my space. The color and style options were also impressive, and I found exactly what matched the rest of my home. The result looks custom-made, and it truly reflects my taste.',
      avatar: 'assets/Cabinetsstudio4.png' },
    { name: 'Megan S.', city: 'Evanston, IL', rating: 4,
      text: 'What I value the most is functionality, and these cabinets are both practical and beautiful. The storage space is thoughtfully planned, the doors and drawers open smoothly, and the whole system feels very user-friendly. It makes cooking and organizing so much easier. Plus, the cabinets look fantastic — it’s a perfect balance of design and comfort.',
      avatar: 'assets/Cabinetsstudio4.png' },
      { name: 'Margo S.', city: 'Evanston, IL', rating: 5,
      text: 'From the first consultation to the final installation, the service from Cabinets Studio was excellent. The staff were patient, answered all my questions, and guided me through the options without any pressure. The whole experience felt very personal. I never once felt rushed, and the end result shows the care they put into their work.',
      avatar: 'assets/Cabinetsstudio4.png' },
      { name: 'Jaxson M.', city: 'Evanston, IL', rating: 5,
      text: 'I’ve received so many compliments on my new kitchen already! Friends and family keep saying how stylish and modern it looks. The cabinets really add character to the whole space, and I love spending time in the kitchen now. It’s amazing how much the right furniture can change the atmosphere of a home.',
      avatar: 'assets/Cabinetsstudio4.png' },
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
