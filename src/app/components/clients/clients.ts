import { Component, OnInit } from '@angular/core';
import { CompanyDataService } from '../../services/company-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.html',
  styleUrl: './clients.css',
})
export class ClientsComponent implements OnInit {
  clients: string[] = [];

  constructor(private dataService: CompanyDataService) {}

  ngOnInit(): void {
    this.clients = this.dataService.getData().clients;
  }
}
