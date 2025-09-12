import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Step = { num: number; title: string; text: string; emoji: string };

@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.css'
})
export class StepsComponent {
steps: Step[] = [
    { num: 1, title: 'Free Measurement', emoji: '',
      text: 'We visit your place to take precise measurements and note your needs.' },
    { num: 2, title: '3D Design & Quote', emoji: '',
      text: 'You receive a detailed 3D layout and transparent estimate.' },
    { num: 3, title: 'Production', emoji: '',
      text: 'Cabinets are crafted from solid wood with strict quality control.' },
    { num: 4, title: 'Delivery & Installation', emoji: '',
      text: 'Our team delivers and installs on schedule, with a 7-year warranty.' },
  ];
}
