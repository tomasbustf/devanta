import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { PortfolioProject } from '../../models/portfolio.model';

type FilterCat = 'all' | 'web' | 'mobile' | 'platform' | 'ai' | 'design' | 'consulting';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  allProjects: PortfolioProject[] = [];
  filtered: PortfolioProject[] = [];
  activeFilter: FilterCat = 'all';
  selectedProject: PortfolioProject | null = null;

  filters: { key: FilterCat; label: string }[] = [
    // { key: 'all',        label: 'Todos' },
    { key: 'web', label: 'Web' },
    // { key: 'mobile',     label: 'Mobile' },
    // { key: 'platform',   label: 'Plataformas' },
    // { key: 'ai',         label: 'IA' },
    // { key: 'design',     label: 'Diseño' },
    // { key: 'consulting', label: 'Consultoría' },
  ];

  categoryLabels: Record<string, string> = {
    web: 'Web', mobile: 'Mobile', platform: 'Plataforma',
    ai: 'IA', design: 'Diseño', consulting: 'Consultoría'
  };

  constructor(private portfolioSvc: PortfolioService) { }

  ngOnInit() {
    this.portfolioSvc.getProjects().subscribe(projects => {
      this.allProjects = projects;
      this.applyFilter(this.activeFilter);
    });
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.08 });
    setTimeout(() => {
      document.querySelectorAll('#trabajos .reveal').forEach(el => observer.observe(el));
    }, 100);
  }

  applyFilter(cat: FilterCat) {
    this.activeFilter = cat;
    this.filtered = cat === 'all'
      ? this.allProjects
      : this.allProjects.filter(p => p.category === cat);
  }

  openProject(project: PortfolioProject) {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeProject() {
    this.selectedProject = null;
    document.body.style.overflow = '';
  }

  getGradient(project: PortfolioProject): string {
    const color = project.imageColor || '#2c1443';
    return `linear-gradient(135deg, ${color} 0%, rgba(128,58,196,0.3) 100%)`;
  }

  getInitials(title: string): string {
    return title.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
  }
}
