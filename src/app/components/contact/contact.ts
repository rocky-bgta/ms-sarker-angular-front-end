import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyDataService } from '../../services/company-data.service';
import { CompanyInfo } from '../../models/company-data.model';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent implements OnInit {
  c!: CompanyInfo;
  @ViewChild('contactForm') contactForm!: NgForm;

  formData = {
    fullName: '',
    email: '',
    subject: '',
    message: ''
  };

  submitted = false;

  constructor(private dataService: CompanyDataService) {}

  ngOnInit(): void {
    this.c = this.dataService.getData().company;
  }

  isEmailValid(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.valid && this.isEmailValid(this.formData.email)) {
      alert('Thank you for your message. We will get back to you soon!');
      this.contactForm.resetForm();
      this.formData = { fullName: '', email: '', subject: '', message: '' };
      this.submitted = false;
    }
  }
}
