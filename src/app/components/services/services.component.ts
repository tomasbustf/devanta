import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  num: string;
  icon: string;
  name: string;
  desc: string;
  tags: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements AfterViewInit {
  services: Service[] = [
    {
      num: '01',
      icon: 'monitor',
      name: 'Desarrollo de Sitios Web',
      desc: 'Creamos sitios web modernos, rápidos y adaptados a celulares que ayudan a tu negocio a verse profesional y atraer más clientes.',
      tags: ['Landing Pages', 'Sitios Corporativos', 'Optimización SEO']
    },
    {
      num: '02',
      icon: 'layers',
      name: 'Integraciones y APIs',
      desc: 'Conectamos tu sitio o plataforma con otros sistemas y herramientas para automatizar procesos y centralizar la información.',
      tags: ['APIs', 'Integraciones', 'Sistemas conectados']
    },
    {
      num: '03',
      icon: 'cpu',
      name: 'Análisis de Datos y Predicción',
      desc: 'Utilizamos datos, estadística y modelos matemáticos para analizar tu negocio, identificar oportunidades y predecir tendencias que ayuden a tomar mejores decisiones.',
      tags: ['Análisis de Datos', 'Predicción', 'Modelos Estadísticos']
    },
    {
      num: '04',
      icon: 'layout',
      name: 'Sistemas de Gestión',
      desc: 'Desarrollamos sistemas web personalizados para administrar clientes, ventas, inventario o procesos internos.',
      tags: ['Panel Admin', 'Gestión de Clientes', 'Inventario']
    },
    {
      num: '05',
      icon: 'layout',
      name: 'Diseño UX/UI',
      desc: 'Diseñamos interfaces modernas y fáciles de usar que mejoran la experiencia del usuario y aumentan la conversión.',
      tags: ['Diseño Web', 'Prototipos', 'Experiencia de Usuario']
    },
    {
      num: '06',
      icon: 'shield',
      name: 'Consultoría Tecnológica',
      desc: 'Te ayudamos a tomar mejores decisiones tecnológicas y a planificar el crecimiento digital de tu empresa.',
      tags: ['Estrategia Digital', 'Optimización', 'Transformación Digital']
    }
  ];

  icons: Record<string, string> = {
    monitor: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
    layers: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
    smartphone: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>`,
    cpu: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/></svg>`,
    layout: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`,
    shield: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  };

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
}
