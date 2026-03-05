import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  plans = [
    {
      name: 'Starter',
      desc: 'Perfecto para comenzar tu presencia digital.',
      price: '$250.000',
      from: true,
      period: 'CLP',
      featured: false,
      features: [
        { text: 'Sitio web profesional o landing page', included: true },
        { text: 'Diseño moderno y adaptado a celulares', included: true },
        { text: 'Hasta 6 secciones (Inicio, Servicios, Contacto, etc.)', included: true },
        { text: 'Formulario de contacto funcional', included: true },
        { text: '1 mes de soporte y ajustes', included: true },
      ]
    },
    {
      name: 'Growth',
      desc: 'Ideal para negocios que quieren vender y automatizar.',
      price: '$400.000',
      from: true,
      period: 'CLP',
      featured: true,
      features: [
        { text: 'Plataforma web completa y personalizada', included: true },
        { text: 'Diseño UX/UI avanzado y estratégico', included: true },
        { text: 'Panel de administración autogestionable', included: true },
        { text: 'Integración de pagos online', included: true },
        // { text: 'Conexión con APIs externas (WhatsApp, CRM, etc.)', included: true },
        { text: 'Optimización de velocidad y seguridad', included: true },
        { text: '3 meses de soporte y mejoras', included: true },
      ]
    },
    {
      name: 'Enterprise',
      desc: 'Soluciones tecnológicas para empresas en expansión.',
      price: 'A medida',
      from: false,
      period: 'CLP',
      featured: false,
      features: [
        { text: 'Desarrollo de sistema a medida', included: true },
        { text: 'Equipo de desarrollo dedicado', included: true },
        { text: 'Infraestructura en la nube gestionada por nosotros', included: true },
        { text: 'Alta seguridad y respaldo automático de datos', included: true },
        { text: 'Disponibilidad garantizada del servicio (SLA)', included: true },
        { text: 'Consultoría tecnológica continua', included: true },
        { text: 'Soporte prioritario 24/7', included: true },
      ]
    }
  ];

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
