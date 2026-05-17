import { Component, OnInit } from '@angular/core';
import { CompanyDataService } from '../../services/company-data.service';
import { CompanyInfo } from '../../models/company-data.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent implements OnInit {
  c!: CompanyInfo;

  constructor(private dataService: CompanyDataService) {}

  ngOnInit(): void {
    this.c = this.dataService.getData().company;
  }

  onSubmit() {
    alert('Thank you for your message. We will get back to you soon!');
  }
}
