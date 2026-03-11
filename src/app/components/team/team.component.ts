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
      imageUrl: 'assets/images/tbf.jpg',
      instagram: 'https://instagram.com/tomasbustf',
      github: 'https://github.com/tomasbustf',
      linkedin: 'https://www.linkedin.com/in/tom%C3%A1s-ignacio-bustos-figueroa-02a7b8186/'
    },
    {
      initials: 'EBB',
      name: 'Eduardo Bravo Bravo',
      role: 'Co-Founder',
      bio: 'Estudiante de cuarto año de Ingeniería Civil Informatica de la Universidad Católica del Maule.',
      gradient: 'linear-gradient(135deg,rgba(128,58,196,0.5),rgba(44,20,67,0.9))',
      // imageUrl: 'assets/images/tbf.jpg',
      instagram: 'https://instagram.com/yemh0m',
      // github: 'https://github.com/tomasbustf',
      // linkedin: 'https://www.linkedin.com/in/tom%C3%A1s-ignacio-bustos-figueroa-02a7b8186/'
    }
  ];
}
