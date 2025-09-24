import { Component, Input, Output ,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})

export class ModalComponent {
  @Input() visible = false;
  @Input() title = '';
  @Input() text = '';
  @Output() closed = new EventEmitter<void>();

  close() {
    this.closed.emit();
  }}