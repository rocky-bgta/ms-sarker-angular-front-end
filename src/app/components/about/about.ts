import { Component, OnInit } from '@angular/core';
import { CompanyDataService } from '../../services/company-data.service';
import { CompanyData } from '../../models/company-data.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent implements OnInit {
  d!: CompanyData;

  constructor(private dataService: CompanyDataService) {}

  ngOnInit(): void {
    this.d = this.dataService.getData();
  }

  getAdvantageIcon(title: string, icon: string): string {
    if (icon?.startsWith('bi-')) {
      return icon;
    }

    const iconsByTitle: Record<string, string> = {
      'Tech-Integrated Safety': 'bi-cpu',
      'One-Stop Solution': 'bi-diagram-3',
      'Energetic Support': 'bi-headset',
      'Global Brands': 'bi-globe2',
    };

    return iconsByTitle[title] || 'bi-check2-circle';
  }
}
