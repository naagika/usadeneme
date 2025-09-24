import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {
  
  images: string[] = [
    'assets/works/work1.png',
    'assets/works/work2.png',
    'assets/works/work3.png',
    'assets/works/work4.png',
    'assets/works/work5.png',
   'assets/works/work2.png',
    'assets/works/work3.png',
    'assets/works/work4.png',
    'assets/works/work5.png', 
    
  ];
showAll = false;

showStep = 1; // 1 = старт, 2 = половина, 3 = всё

toggleShow() {
  if (this.showStep < 3) {
    this.showStep++;
  } else {
    this.showStep = 2; // сброс при "Show less"
  }
}


}