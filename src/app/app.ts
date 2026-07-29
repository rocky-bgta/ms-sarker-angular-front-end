import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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

  constructor(companyDataService: CompanyDataService) {
    const phone = companyDataService.getData().company.phone1;
    const digits = phone.replace(/\D/g, '');
    const international = digits.startsWith('0') ? '880' + digits.slice(1) : digits;
    this.whatsappUrl = `https://wa.me/${international}`;
  }
}
