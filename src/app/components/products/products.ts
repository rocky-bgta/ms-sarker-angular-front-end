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
  imageIndexMap: Record<string, number> = {};

  constructor(private dataService: CompanyDataService) {}

  ngOnInit(): void {
    this.products = this.dataService.getData().products;
    this.products.forEach(p => { this.imageIndexMap[p.id] = 0; });
  }

  hasGallery(product: Product): boolean {
    return !!product.images && product.images.length > 1;
  }

  getCurrentImage(product: Product): string {
    if (product.images && product.images.length > 0) {
      return product.images[this.imageIndexMap[product.id] ?? 0];
    }
    return this.getProductImage(product);
  }

  cycleImage(product: Product): void {
    if (!this.hasGallery(product)) return;
    const total = product.images!.length;
    this.imageIndexMap[product.id] = (this.imageIndexMap[product.id] + 1) % total;
  }

  getImageDots(product: Product): number[] {
    return product.images ? product.images.map((_, i) => i) : [];
  }

  getSectionOrder(product: Product): ('description' | 'brands' | 'specs')[] {
    return product.sectionOrder || this.defaultSectionOrder;
  }

  getProductIcon(product: Product): string {
    if (product.icon?.startsWith('bi-')) {
      return product.icon;
    }

    const iconsById: Record<string, string> = {
      'ips-power': 'bi-battery-charging',
      'portable-power-station': 'bi-box-seam',
      'ese-lps': 'bi-lightning-charge',
      'iot-devices': 'bi-broadcast-pin',
      'chemical-earthing': 'bi-plug',
      'solar-systems': 'bi-sun',
      'solar-inverter': 'bi-arrow-left-right',
      'solar-street-lights': 'bi-lightbulb',
      spd: 'bi-shield-check',
      'circuit-breakers': 'bi-sliders',
    };

    return iconsById[product.id] || 'bi-box';
  }

  getProductImage(product: Product): string {
    if (product.imageUrl) {
      return product.imageUrl;
    }

    const imagesById: Record<string, string> = {
      'ips-power':
        'https://shop.rangs.com.bd/_next/image?q=75&url=https%3A%2F%2Fecom.rangs.com.bd%2Fstorage%2F11054%2F860X740-01.jpg&w=3840',
      'portable-power-station':
        'https://i5.walmartimages.com/seo/Portable-Power-Station-300W-299-5Wh-Battery-Bank-with-120V-Pure-Sine-Wave-AC-Outlet-for-Outdoor-Camping-Hunting-Emergency-Backup-and-CPAP-Machine_b96e2f87-eb14-493d-b2cd-61cdbb2a5c80.0a7e0be3e13b302028adf2992cc759e0.jpeg?odnBg=FFFFFF&odnHeight=576&odnWidth=576',
      'ese-lps':
        'https://static.ticimax.cloud/11643/uploads/urunresimleri/buyuk/tesla-st-e.s.e.-paratoner-5770-0.jpg',
      'iot-devices': 'https://indelec.com/wp-content/uploads/S60_A_IMGP7498.jpg',
      'chemical-earthing':
        'https://cpimg.tistatic.com/07925796/b/4/Galvanized-Iron-Chemical-Earthing-Electrode.jpg',
      'solar-systems': 'https://pvdirect.co.za/cdn/shop/products/tileroofquad.jpg?v=1660685847',
      'solar-inverter':
        'https://image.made-in-china.com/202f0j00WRqoBEvdEAuH/Growatt-Inverter-3kw-5kw-10kw-15kw-Solar-on-Grid-Inverter-3-Phase.webp',
      'solar-street-lights':
        'https://mobileprokenya.odoo.com/web/image/product.product/732/image_1024/Solar%20Street%20Light?unique=c09e05f',
      spd: 'https://www.leydenindia.com/image/cache/catalog/A%20SPD/AC%20SPD/leyden%20spd%20ac%20surge%20protector-550x550w.png',
      'circuit-breakers':
        'https://image.made-in-china.com/202f0j00BQtMFykICfbl/OEM-50A-Fixed-Type-Circuit-Breaker-Cm1-Moulded-Case-Circuit-Breaker-MCCB.webp',
    };

    return imagesById[product.id] || '';
  }

  handleProductImageError(event: Event): void {
    const imageElement = event.target as HTMLImageElement;
    imageElement.parentElement?.classList.add('is-fallback');
  }
}
