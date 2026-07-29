import { Component, OnInit } from '@angular/core';
import { CompanyDataService } from '../../services/company-data.service';
import { Client } from '../../models/company-data.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.html',
  styleUrl: './clients.css',
})
export class ClientsComponent implements OnInit {
  clients: Client[] = [];

  constructor(private dataService: CompanyDataService) {}

  ngOnInit(): void {
    this.clients = this.dataService.getData().clients.map((client) => this.normalizeClient(client));
  }

  private normalizeClient(client: Client | string): Client {
    if (typeof client !== 'string') {
      return client;
    }

    const clientFallbacks: Record<string, Client> = {
      'National Power Pac': {
        name: 'National Power Pac',
        website: 'https://nationalpowerpac.com/',
        logoUrl: 'https://www.google.com/s2/favicons?domain=nationalpowerpac.com&sz=128',
      },
      'Creative Solar & Technology': {
        name: 'Creative Solar & Technology',
        website: 'https://creativesolarbd.com/',
        logoUrl: 'https://www.google.com/s2/favicons?domain=creativesolarbd.com&sz=128',
      },
      'MRS Group': {
        name: 'MRS Group',
        website: 'https://www.mrsgroupbd.com/',
        logoUrl: 'https://www.google.com/s2/favicons?domain=mrsgroupbd.com&sz=128',
      },
      'Tamisna Group': {
        name: 'Tamishna Group',
        website: 'https://www.tamishna.com/',
        logoUrl: 'https://www.google.com/s2/favicons?domain=tamishna.com&sz=128',
      },
      'Tamishna Group': {
        name: 'Tamishna Group',
        website: 'https://www.tamishna.com/',
        logoUrl: 'https://www.google.com/s2/favicons?domain=tamishna.com&sz=128',
      },
      'Losung Power Engineering': {
        name: 'Losung Power Engineering',
        website: 'https://www.losungpower.com/',
        logoUrl: 'https://www.google.com/s2/favicons?domain=losungpower.com&sz=128',
      },
      'Thai Foile & Polymer Industries Ltd (Al-Mostafa Group)': {
        name: 'Thai Foils & Polymer Industries Ltd (Al-Mostafa Group)',
        website: 'https://thaifoilsandpolymers.com/',
        logoUrl: 'https://www.google.com/s2/favicons?domain=thaifoilsandpolymers.com&sz=128',
      },
      'Earth Moving Solution Ltd.': {
        name: 'Earthmoving Solution Ltd.',
        website: 'https://earthmoving.com.bd/',
        logoUrl: 'https://www.google.com/s2/favicons?domain=earthmoving.com.bd&sz=128',
      },
    };

    return (
      clientFallbacks[client] || {
        name: client,
        website: '#',
        logoUrl: 'https://www.google.com/s2/favicons?domain=example.com&sz=128',
      }
    );
  }
}
