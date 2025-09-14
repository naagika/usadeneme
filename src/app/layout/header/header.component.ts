import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
isMobileMenuOpen = false;
scrolled = false;
currentSection: string = '';

toggleMobileMenu() {
this.isMobileMenuOpen = !this.isMobileMenuOpen;
}

ngOnInit(): void {
window.addEventListener('scroll', this.onScroll.bind(this));
}

onScroll() {
this.scrolled = window.scrollY > 20;

const sections = ['hero', 'steps', 'catalog', 'cta', 'reviews', 'faq'];
for (const id of sections) {
const el = document.getElementById(id);
if (el) {
const rect = el.getBoundingClientRect();
if (rect.top <= 100 && rect.bottom >= 100) {
this.currentSection = id;
break;
}
}
}
}

}
