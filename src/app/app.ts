import { AfterViewInit, Component, ElementRef, HostListener, QueryList, ViewChildren, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { AboutComponent } from './components/about/about';
import { ClientsComponent } from './components/clients/clients';
import { ContactComponent } from './components/contact/contact';
import { HomeComponent } from './components/home/home';
import { NavbarComponent } from './components/navbar/navbar';
import { ProductsComponent } from './components/products/products';
import { ProjectsComponent } from './components/projects/projects';
import { CompanyDataService } from './services/company-data.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ProjectsComponent,
    ClientsComponent,
    ContactComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected readonly title = signal('ms-sarker');
  protected readonly isAdminRoute = signal(this.readBrowserRoute() === '/admin');

  protected readonly whatsappUrl: string;
  protected readonly currentYear = new Date().getFullYear();

  private readonly sectionRoutes = ['/', '/about', '/products', '/projects', '/clients', '/contact'];
  private readonly navbarOffset = 72;
  private routeSyncFrame = 0;
  private isScrollingFromRoute = false;
  private isSyncingRouteFromScroll = false;
  private scrollReleaseTimer = 0;

  @ViewChildren('publicSection')
  private readonly publicSections!: QueryList<ElementRef<HTMLElement>>;

  constructor(
    companyDataService: CompanyDataService,
    private readonly router: Router
  ) {
    const phone = companyDataService.getData().company.phone1;
    const digits = phone.replace(/\D/g, '');
    const international = digits.startsWith('0') ? '880' + digits.slice(1) : digits;
    this.whatsappUrl = `https://wa.me/${international}`;

    this.syncRouteState(this.readBrowserRoute());

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        const route = this.syncRouteState(event.urlAfterRedirects);

        if (this.isPublicRoute(route) && !this.isSyncingRouteFromScroll) {
          this.scrollToSection(route);
        }
      });
  }

  ngAfterViewInit(): void {
    requestAnimationFrame(() => {
      const route = this.normalizeRoute(this.router.url === '/' ? this.readBrowserRoute() : this.router.url);

      if (this.isPublicRoute(route)) {
        this.scrollToSection(route);
      }
    });
  }

  @HostListener('window:scroll')
  protected onWindowScroll(): void {
    if (this.isAdminRoute() || this.isScrollingFromRoute || this.routeSyncFrame) {
      return;
    }

    this.routeSyncFrame = requestAnimationFrame(() => {
      this.routeSyncFrame = 0;
      this.syncRouteFromScroll();
    });
  }

  private syncRouteState(url: string): string {
    const route = this.normalizeRoute(url);
    this.isAdminRoute.set(route === '/admin');

    return route;
  }

  private syncRouteFromScroll(): void {
    const route = this.findCurrentScrollRoute();

    if (!route || route === this.normalizeRoute(this.router.url)) {
      return;
    }

    this.isSyncingRouteFromScroll = true;

    void this.router.navigateByUrl(route, { replaceUrl: true }).finally(() => {
      this.isSyncingRouteFromScroll = false;
    });
  }

  private findCurrentScrollRoute(): string | null {
    const sections = this.publicSections?.toArray() ?? [];
    const scrollPoint = window.scrollY + this.navbarOffset + 24;
    let currentRoute: string | null = null;

    for (const section of sections) {
      if (section.nativeElement.offsetTop <= scrollPoint) {
        currentRoute = section.nativeElement.dataset['route'] ?? null;
      }
    }

    return currentRoute;
  }

  private scrollToSection(route: string): void {
    const section = this.publicSections
      ?.toArray()
      .find((item) => item.nativeElement.dataset['route'] === route);

    if (!section) {
      return;
    }

    window.clearTimeout(this.scrollReleaseTimer);
    this.isScrollingFromRoute = true;

    window.scrollTo({
      top: Math.max(0, section.nativeElement.offsetTop - this.navbarOffset),
      left: 0,
      behavior: 'smooth',
    });

    this.scrollReleaseTimer = window.setTimeout(() => {
      this.isScrollingFromRoute = false;
      this.syncRouteFromScroll();
    }, 900);
  }

  private normalizeRoute(url: string): string {
    const [path] = url.split(/[?#]/);
    const route = path === '' ? '/' : path;

    return route.endsWith('/') && route !== '/' ? route.slice(0, -1) : route;
  }

  private isPublicRoute(route: string): boolean {
    return this.sectionRoutes.includes(route);
  }

  private readBrowserRoute(): string {
    const hashPath = window.location.hash.startsWith('#') ? window.location.hash.slice(1) : '';

    return this.normalizeRoute(hashPath || window.location.pathname);
  }
}
