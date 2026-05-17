import { Component, OnInit } from '@angular/core';
import { CompanyDataService } from '../../services/company-data.service';
import { CompanyData } from '../../models/company-data.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements OnInit {
  d!: CompanyData;

  constructor(private dataService: CompanyDataService) {}

  ngOnInit(): void {
    this.d = this.dataService.getData();
  }
}
