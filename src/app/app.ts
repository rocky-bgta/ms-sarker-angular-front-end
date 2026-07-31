import { Component, HostListener, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { CompanyDataService } from './services/company-data.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ms-sarker');

  protected readonly whatsappUrl: string;

  private readonly routeOrder = ['/', '/about', '/products', '/projects', '/clients', '/contact'];
  private readonly wheelCooldownMs = 750;
  private lastWheelNavigationAt = 0;

  constructor(
    companyDataService: CompanyDataService,
    private readonly router: Router
  ) {
    const phone = companyDataService.getData().company.phone1;
    const digits = phone.replace(/\D/g, '');
    const international = digits.startsWith('0') ? '880' + digits.slice(1) : digits;
    this.whatsappUrl = `https://wa.me/${international}`;
  }

  @HostListener('window:wheel', ['$event'])
  protected onWindowWheel(event: WheelEvent): void {
    if (this.shouldIgnoreWheel(event) || Math.abs(event.deltaY) < 40) {
      return;
    }

    const direction = event.deltaY > 0 ? 1 : -1;

    if (!this.isAtScrollBoundary(direction)) {
      return;
    }

    const currentRouteIndex = this.routeOrder.indexOf(this.currentPublicRoute());
    const nextRouteIndex = currentRouteIndex + direction;

    if (currentRouteIndex === -1 || nextRouteIndex < 0 || nextRouteIndex >= this.routeOrder.length) {
      return;
    }

    event.preventDefault();
    this.lastWheelNavigationAt = Date.now();

    void this.router.navigateByUrl(this.routeOrder[nextRouteIndex]).then((navigated) => {
      if (navigated) {
        requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }));
      }
    });
  }

  private shouldIgnoreWheel(event: WheelEvent): boolean {
    if (event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
      return true;
    }

    if (Date.now() - this.lastWheelNavigationAt < this.wheelCooldownMs) {
      return true;
    }

    const target = event.target;

    return target instanceof Element && Boolean(target.closest('input, select, textarea, [contenteditable="true"]'));
  }

  private isAtScrollBoundary(direction: number): boolean {
    const scrollTop = window.scrollY;
    const maxScrollTop = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const threshold = 8;

    return direction > 0
      ? scrollTop >= maxScrollTop - threshold
      : scrollTop <= threshold;
  }

  private currentPublicRoute(): string {
    const [path] = this.router.url.split(/[?#]/);

    return path === '' ? '/' : path;
  }
}
