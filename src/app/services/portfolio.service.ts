import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PortfolioProject } from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {

  // ═══════════════════════════════════════════════════
  // AGREGA TUS PROYECTOS AQUÍ
  // Cada objeto es un trabajo del portafolio.
  // Campos:
  //   id          → identificador único (string)
  //   title       → nombre del proyecto
  //   client      → nombre del cliente o empresa
  //   category    → 'web' | 'mobile' | 'platform' | 'ai' | 'consulting' | 'design'
  //   description → descripción corta del proyecto
  //   tags        → tecnologías o keywords
  //   imageUrl    → ruta a assets/images/ o URL externa (opcional)
  //   imageColor  → color hex para el placeholder si no hay imagen
  //   liveUrl     → URL del sitio live (opcional)
  //   year        → año de entrega
  //   featured    → true para destacarlo en la sección principal
  // ═══════════════════════════════════════════════════
  private projects: PortfolioProject[] = [
    {
      id: '001',
      title: 'Pagina Web para fundación Hernan Quintanilla',
      client: 'Fundación Hernan Quintanilla',
      category: 'web',
      description: 'Pagina web para la fundación Hernan Quintanilla, con el objetivo de dar a conocer sus actividades, proyectos, historia y preservar el legado de Hernan Quintanilla Mendez.',
      tags: ['Angular'],
      imageUrl: 'assets/images/fundacion-hernan-quintanilla.png',
      imageColor: '#2c1443',
      liveUrl: 'https://fundacionhernanquintanilla.cl',
      year: 2026,
      featured: true
    },

  ];

  private projects$ = new BehaviorSubject<PortfolioProject[]>(this.projects);

  getProjects() { return this.projects$.asObservable(); }

  getProjectsByCategory(cat: string) {
    return this.projects.filter(p => cat === 'all' || p.category === cat);
  }

  // Método para agregar proyectos dinámicamente (útil para admin en el futuro)
  addProject(project: PortfolioProject) {
    this.projects = [project, ...this.projects];
    this.projects$.next(this.projects);
  }
}
