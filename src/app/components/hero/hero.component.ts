import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('heroCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private animFrame = 0;

  ngAfterViewInit() { this.initCanvas(); }

  initCanvas() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d')!;
    let dots: any[] = [];
    let W: number, H: number;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      dots = [];
      const gap = 64;
      for (let x = 0; x < W + gap; x += gap) {
        for (let y = 0; y < H + gap; y += gap) {
          dots.push({ x, y, ox: x, oy: y, r: Math.random() * 1.2 + 0.3,
            phase: Math.random() * Math.PI * 2, speed: Math.random() * 0.4 + 0.2 });
        }
      }
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = 'rgba(128,58,196,0.6)';
      dots.forEach(d => {
        d.x = d.ox + Math.sin(t * d.speed * 0.001 + d.phase) * 4;
        d.y = d.oy + Math.cos(t * d.speed * 0.0007 + d.phase) * 3;
        ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2); ctx.fill();
      });
      ctx.strokeStyle = 'rgba(128,58,196,0.1)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < 72) {
            ctx.globalAlpha = (1 - dist/72) * 0.45;
            ctx.beginPath(); ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y); ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      this.animFrame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    this.animFrame = requestAnimationFrame(draw);
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnDestroy() { cancelAnimationFrame(this.animFrame); }
}
