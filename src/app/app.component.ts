import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { ProcessComponent } from './components/process/process.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    ProcessComponent,
    PortfolioComponent,
    PricingComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <div class="divider"></div>
      <app-services></app-services>
      <div class="divider"></div>
      <app-portfolio></app-portfolio>
      <div class="divider"></div>
      <app-process></app-process>
      <div class="divider"></div>
      <app-pricing></app-pricing>
      <div class="divider"></div>
      <app-team></app-team>
      <div class="divider"></div>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `
})
export class AppComponent {}
