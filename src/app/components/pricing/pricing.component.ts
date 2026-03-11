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
      name: 'Landing',
      desc: 'Ideal para negocios que necesitan presencia online rápida y profesional.',
      price: '$150.000',
      from: true,
      period: 'CLP (IVA incluido)',
      oferta: true,
      features: [
        { text: 'Landing page profesional de una sección', included: true },
        { text: 'Diseño moderno y adaptado a celulares', included: true },
        { text: 'Sección de servicios o propuesta de valor', included: true },
        { text: 'Botón directo a WhatsApp', included: true },
        { text: 'Formulario de contacto simple', included: true },
        { text: 'Optimización básica de velocidad', included: true },
        { text: '2 semanas de soporte y ajustes', included: true },
      ]
    },
    {
      name: 'Starter',
      desc: 'Perfecto para negocios que quieren una web completa.',
      price: '$290.000',
      from: true,
      period: 'CLP (IVA incluido)',
      featured: false,
      features: [
        { text: 'Sitio web profesional completo', included: true },
        { text: 'Diseño moderno y adaptado a celulares', included: true },
        { text: 'Hasta 6 secciones (Inicio, Servicios, Nosotros, Contacto, etc.)', included: true },
        { text: 'Formulario de contacto funcional', included: true },
        { text: 'Integración con WhatsApp', included: true },
        { text: 'Optimización de velocidad', included: true },
        { text: '1 mes de soporte y ajustes', included: true },
      ]
    },
    {
      name: 'Growth',
      desc: 'Para negocios que quieren vender y automatizar procesos.',
      price: '$450.000',
      from: true,
      period: 'CLP (IVA incluido)',
      featured: true,
      features: [
        { text: 'Plataforma web completa y personalizada', included: true },
        { text: 'Diseño UX/UI avanzado y estratégico', included: true },
        { text: 'Panel de administración autogestionable', included: true },
        { text: 'Integración de pagos online', included: true },
        { text: 'Conexión con APIs externas (WhatsApp, CRM, etc.)', included: true },
        { text: 'Optimización avanzada de velocidad y seguridad', included: true },
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
        { text: 'Desarrollo de sistema o plataforma a medida', included: true },
        { text: 'Equipo de desarrollo dedicado', included: true },
        { text: 'Infraestructura cloud gestionada', included: true },
        { text: 'Alta seguridad y respaldo automático', included: true },
        { text: 'Disponibilidad garantizada (SLA)', included: true },
        { text: 'Consultoría tecnológica continua', included: true },
        { text: 'Soporte prioritario 24/7', included: true },
      ]
    }
  ];
  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
