import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  members = [
    {
      initials: 'TBF',
      name: 'Tomás Bustos Figueroa',
      role: 'Founder & CEO',
      bio: 'Estudiante de cuarto año de Ingeniería Civil Informatica de la Universidad Católica del Maule.',
      gradient: 'linear-gradient(135deg,rgba(128,58,196,0.5),rgba(44,20,67,0.9))',
      imageUrl: 'assets/images/tbf.jpg'
    },

  ];
}
