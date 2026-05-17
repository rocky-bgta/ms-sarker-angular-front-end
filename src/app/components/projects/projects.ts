import { Component, OnInit } from '@angular/core';
import { CompanyDataService } from '../../services/company-data.service';
import { Project } from '../../models/company-data.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private dataService: CompanyDataService) {}

  ngOnInit(): void {
    this.projects = this.dataService.getData().projects;
  }
}
