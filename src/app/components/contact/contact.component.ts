import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  form = { name: '', company: '', email: '', service: '', budget: '', message: '' };
  submitted = false;
  isLoading = false;

  async send() {
    if (!this.form.name || !this.form.email || !this.form.message) {
      alert('Por favor completa los campos obligatorios: Nombre, Email y Mensaje');
      return;
    }

    this.isLoading = true;

    try {
      await emailjs.send(
        'service_htgb7bp',
        'template_zugktyz',
        {
          from_name: this.form.name,
          to_name: 'Devanta',
          company: this.form.company,
          reply_to: this.form.email,
          message: this.form.message,
        },
        'D0sRaqKCAQsPkRkxP'
      );

      this.submitted = true;
      this.form = { name: '', company: '', email: '', service: '', budget: '', message: '' };
      setTimeout(() => this.submitted = false, 3500);
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      alert('Hubo un error al enviar el mensaje. Por favor intenta nuevamente.');
    } finally {
      this.isLoading = false;
    }
  }
}
