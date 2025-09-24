import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9()+\-\s]{7,20}$/)]],
    });
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const templateParams = {
      name: this.form.value.name,
      phone: this.form.value.phone,
    };

    emailjs.send(
      'service_pkslsch',      // 👉 твой Service ID
       'template_br0wh5s',
      //'template_br0wh5sf',     // 👉 твой Template ID
      templateParams,
      'thn1Z3eik7UiCzDeB'     // 👉 твой Public Key
    ).then(() => {
      this.router.navigate(['/thank-you']);
    }).catch(err => {
      console.error('EmailJS error:', err);
      alert('Sending error. Try again later.');
    });
  
  }
}
