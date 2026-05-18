import { Component, OnInit } from '@angular/core';
import { CompanyDataService } from '../../services/company-data.service';
import { Product } from '../../models/company-data.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  defaultSectionOrder: ('description' | 'brands' | 'specs')[] = ['description', 'brands', 'specs'];

  constructor(private dataService: CompanyDataService) {}

  ngOnInit(): void {
    this.products = this.dataService.getData().products;
  }

  getSectionOrder(product: Product): ('description' | 'brands' | 'specs')[] {
    return product.sectionOrder || this.defaultSectionOrder;
  }
}
