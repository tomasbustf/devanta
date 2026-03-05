import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
<footer>
  <div class="footer-inner">
    <div class="logo">
      <img src="assets/images/logos/DEVANTA-WHITE.png" alt="Devanta"
           onerror="this.style.display='none'; this.nextElementSibling.style.display='block'">
      <span class="logo-text" style="display:none">DEV<span>ANTA</span></span>
    </div>
    <div class="copy">© 2025 Devanta.</div>
    <div class="links">
      <a href="https://instagram.com/devanta.cl" target="_blank" aria-label="Instagram" style="display: flex; align-items: center;">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px; vertical-align: middle;"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        devanta.cl
      </a>
    </div>
  </div>
</footer>
  `,
  styles: [`
footer {
  border-top: 1px solid rgba(128,58,196,0.15);
  padding: 40px 60px;
}
.footer-inner {
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 16px; max-width: 1200px; margin: 0 auto;
}
.logo { img { height: 26px; opacity: 0.75; } }
.logo-text {
  font-family: 'Syne', sans-serif; font-size: 18px; font-weight: 800; opacity: 0.75;
  span { color: #bd98e0; }
}
.copy { font-size: 13px; color: #8c849c; }
.links { display: flex; gap: 24px;
  a { font-size: 13px; color: #8c849c; text-decoration: none; transition: color 0.2s;
      &:hover { color: #bd98e0; } }
}
@media (max-width:640px) {
  footer { padding: 30px 24px; }
  .footer-inner { flex-direction: column; text-align: center; }
  .links { justify-content: center; }
}
  `]
})
export class FooterComponent { }
