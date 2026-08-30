# M/S SARKER — Angular Website

Angular 21 standalone-component website for M/S SARKER, deployed automatically to [mssarker.com](https://mssarker.com/#/) via GitHub Pages.

---

## Quick Start

```bash
npm install
npm start          # dev server at http://localhost:4200/
npm run build      # production build → dist/ms-sarker/browser/
```

---

## Project Structure

```
src/
  app/
    components/        # one folder per page
      home/
      products/
      projects/
      about/
      contact/
    models/
      company-data.model.ts   # TypeScript interfaces
    services/
      company-data.service.ts # ALL website content lives here
  styles.css           # global styles & CSS variables
public/
  images/
    company/           # banner, logo
    products/          # product images & gallery images
```

**Single source of truth:** every piece of text, every image path, and every product/project entry is defined in `src/app/services/company-data.service.ts`. Edit that file to change any website content.

---

## Deployment

Push to `main` — GitHub Actions builds and deploys automatically.

Manual build for other hosts:
```bash
npm run build
# upload dist/ms-sarker/browser/ to your host
```

The app uses `withHashLocation()` routing so it works on any static host with no server config.

---

## Managing Products

All product data is in the `products: [...]` array inside `company-data.service.ts`.

### Product object structure

```typescript
{
  id: 'solar-systems',              // unique slug, never change after adding
  category: 'Renewable Energy',     // shown as meta label above the title
  icon: 'bi-sun',                   // Bootstrap Icon class (see icons section)
  name: 'Solar PV Systems',         // card title
  description: 'Complete solar...', // paragraph shown on the card
  brands: ['JA Solar', 'Jinko'],    // badge list
  specs: ['720W panel', '...'],     // bullet list with checkmark icons
  imageUrl: '/images/products/solar-panel-ja-630w.jpeg', // default/fallback image
  images: [                         // gallery array (optional, enables gallery mode)
    '/images/products/solar-panel-ja-630w.jpeg',
    '/images/products/solar-panel-ja-datasheet1.jpeg',
  ],
  imageSourceUrl: '',               // optional external link for image credit
  sectionOrder: ['description', 'brands', 'specs'], // optional, controls card layout
  tags: ['Solar', 'Bifacial'],      // internal tags, not displayed
}
```

---

### Changing product order

Products appear on the page in the exact order they are listed in the `products` array.  
Move an object up or down in the array to reorder it.

```typescript
products: [
  { id: 'solar-systems', ... },   // appears 1st
  { id: 'solar-inverter', ... },  // appears 2nd
  { id: 'ese-lps', ... },         // appears 3rd
  // ...
]
```

---

### Updating product text

Open `src/app/services/company-data.service.ts`, find the product by its `id`, and edit any field:

```typescript
{
  id: 'chemical-earthing',
  name: 'Chemical Earthing System',           // ← change title here
  description: 'Maintenance-free...',         // ← change description here
  brands: ['Wallis (Origin: UK)'],            // ← add/remove brand badges
  specs: [
    'Chemical Earth Electrode',               // ← add/remove spec bullets
    'Low Resistance | Long Life',
  ],
}
```

---

### Updating a single product image

1. Copy the new image into `public/images/products/`.
2. Update `imageUrl` in the product object:

```typescript
{
  id: 'ese-lps',
  imageUrl: '/images/products/ese-lps-paraton60.png',  // ← new filename here
  // ...
}
```

The path must start with `/images/` — this maps to the `public/images/` folder.

---

### Setting up an image gallery

A gallery is enabled automatically when a product has an `images` array with **more than one entry**.

```typescript
{
  id: 'solar-systems',
  imageUrl: '/images/products/solar-panel-ja-630w.jpeg', // first image (card default)
  images: [
    '/images/products/solar-panel-ja-630w.jpeg',         // shown first on card
    '/images/products/solar-panel-ja-datasheet1.jpeg',   // shown on click
    '/images/products/solar-panel-jinko-720w.png',       // shown on next click
  ],
  // ...
}
```

**How it works on the card:**
- A photo-stack icon appears in the top-right corner indicating a gallery.
- Clicking the image cycles to the next photo.
- Dots at the bottom of the image show current position.

**How to add images to an existing gallery:**
1. Put the new image file in `public/images/products/`.
2. Add its path to the `images` array at the desired position.

**To control which image appears first** on the card, put it as the first entry in `images` and also set it as `imageUrl`.

---

### Image gallery lightbox

Clicking the expand button (⛶) on any product card opens a full-screen lightbox.

| Action | Result |
|--------|--------|
| Click image | Zoom in (2.5×) |
| Click again when zoomed | Zoom out |
| Drag when zoomed | Pan image |
| Arrow keys ← → | Previous / next image |
| Click dots at bottom | Jump to image |
| Esc or × button | Close |

No code changes are needed — the lightbox works automatically for any product that has an `images` array.

---

### Adding a new product

1. Add the image(s) to `public/images/products/`.
2. Add a new object to the `products` array in `company-data.service.ts`:

```typescript
{
  id: 'my-new-product',           // unique, lowercase, hyphen-separated
  category: 'Category Name',
  icon: 'bi-box',                 // Bootstrap Icon class
  name: 'My New Product',
  description: 'Description text.',
  brands: ['Brand A', 'Brand B'],
  specs: ['Spec 1', 'Spec 2'],
  imageUrl: '/images/products/my-new-product.png',
  images: [                       // omit this key if no gallery needed
    '/images/products/my-new-product.png',
    '/images/products/my-new-product-datasheet.png',
  ],
  imageSourceUrl: '',
  tags: ['tag1'],
},
```

3. Place the object at the position in the array where you want it to appear on the page.

---

### Removing a product

Delete the entire `{ ... }` object for that product from the `products` array.

---

### Changing product icons

Icons use [Bootstrap Icons](https://icons.getbootstrap.com/). Find the icon name on that page, then set it on the product:

```typescript
{ icon: 'bi-lightning-charge' }   // ESE lightning
{ icon: 'bi-sun' }                // Solar
{ icon: 'bi-droplet-half' }       // Irrigation
{ icon: 'bi-shield-check' }       // Protection
{ icon: 'bi-battery-charging' }   // Power/IPS
```

---

### Customising section order per card

By default each card shows: Description → Brands → Specs.  
Add `sectionOrder` to a product to override:

```typescript
{
  id: 'ese-lps',
  sectionOrder: ['specs', 'brands', 'description'],  // Specs shown first
  // ...
}
```

Valid values: `'description'`, `'brands'`, `'specs'`.

---

## Company Info & Branding

Edit the `company` object at the top of `company-data.service.ts`:

```typescript
company: {
  name: 'M/S SARKER',
  tagline: 'Born for Revolution',   // shown under company name on home page
  slogan: '',                        // secondary line (hidden when empty)
  founded: '2018',
  location: 'Dhaka, Bangladesh',
  phone: '01234-567890',
  phone2: '01234-567891',
  email: 'example@gmail.com',
  // ...
}
```

---

## Background Image

The site background image is `public/images/company/ms-sarker-banner.png`.  
Replace this file with a higher-resolution version (1920px wide recommended) to keep it sharp.  
The CSS reference is in `src/styles.css`:

```css
body {
  background: ..., url('/images/company/ms-sarker-banner.png') center center / cover;
}
```

---

## Build & Push Workflow

```bash
# 1. Make changes in company-data.service.ts or public/images/
# 2. Verify locally
npm run build

# 3. Stage, commit, push
git add src/app/services/company-data.service.ts
git add public/images/products/new-image.png
git commit -m "feat(products): add new product"
git push origin main

# GitHub Actions deploys automatically — live in ~1 minute
```
