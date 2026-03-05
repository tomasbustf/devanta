import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  template: `
<section id="proceso">
  <div class="container">
    <div class="layout">
      <div class="left reveal">
        <div class="section-tag">Proceso</div>
        <h2 class="section-title">Cómo<br><span class="accent">trabajamos</span></h2>
        <p class="section-sub">Un proceso claro, iterativo y transparente. Sabrás exactamente en qué etapa está tu proyecto en todo momento.</p>

        <div class="steps">
          <div class="step" *ngFor="let s of steps">
            <div class="step-num">{{ s.num }}</div>
            <div>
              <div class="step-title">{{ s.title }}</div>
              <div class="step-desc">{{ s.desc }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="visual reveal">
        <div class="glyph">
          <img src="assets/images/logos/DV-white.png" alt="DV" style="height: 160px; opacity: 0.1;">
        </div>
        <div class="orbit o1"><div class="dot"></div></div>
        <div class="orbit o2"><div class="dot"></div></div>
        <div class="center">
          <img src="assets/images/logos/DEVANTA-WHITE.png" alt="Devanta Studio" style="height: 18px; margin-bottom: 6px; display: block; margin-left: auto; margin-right: auto;">
          <span>Ingeniería con propósito</span>
        </div>
      </div>
    </div>
  </div>
</section>
  `,
  styleUrl: './process.component.scss'
})
export class ProcessComponent {
  steps = [
    { num: '01', title: 'Diagnóstico & Estrategia', desc: 'Analizamos tu organización, objetivos y contexto técnico. Definimos el alcance y la arquitectura ideal antes de escribir código.' },
    { num: '02', title: 'Diseño & Prototipado', desc: 'Construimos prototipos interactivos y validamos la experiencia contigo. El diseño es funcional antes de ser hermoso.' },
    { num: '03', title: 'Desarrollo en Sprints', desc: 'Iteraciones de 2 semanas con entregables reales. Revisiones constantes para que el producto evolucione en la dirección correcta.' },
    { num: '04', title: 'Lanzamiento & Soporte', desc: 'Deployment cuidadoso, pruebas exhaustivas y acompañamiento post-lanzamiento. No desaparecemos cuando el proyecto va live.' },
  ];
}
