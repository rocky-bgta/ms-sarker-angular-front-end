import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { PublicRouteComponent } from './components/public-route/public-route.component';

export const routes: Routes = [
  { path: '', component: PublicRouteComponent },
  { path: 'about', component: PublicRouteComponent },
  { path: 'products', component: PublicRouteComponent },
  { path: 'projects', component: PublicRouteComponent },
  { path: 'clients', component: PublicRouteComponent },
  { path: 'contact', component: PublicRouteComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', redirectTo: '' }
];
