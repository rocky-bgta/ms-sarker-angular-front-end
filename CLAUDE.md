# CLAUDE.md — M/S SARKER Angular Website

## Project overview

Angular 21 standalone-component website for M/S SARKER (electrical contractor, Dhaka, Bangladesh). Deployed to [mssarker.com](https://mssarker.com/#/) via GitHub Pages through GitHub Actions on every push to `main`.

- **Framework**: Angular 21.2, standalone components, TypeScript strict mode
- **Routing**: `withHashLocation()` — all routes use `/#/` prefix
- **Styling**: Bootstrap 5 + Bootstrap Icons + custom CSS variables in `src/styles.css`
- **Build**: `ng build --base-href /` → `dist/ms-sarker/browser/`

---

## Single source of truth

**All website content lives in one file:**
```
src/app/services/company-data.service.ts
```

This includes company info, all products, all projects, all clients, features, and stats. No content is hardcoded in templates. When asked to update any text, image, or data on the site, always edit this file.

---

## File structure

```
src/
  app/
    app.ts / app.config.ts / app.routes.ts / app.html
    components/
      navbar/        navbar.ts  navbar.html  navbar.css
      home/          home.ts    home.html    home.css
      about/         about.ts   about.html   about.css
      products/      products.ts products.html products.css
      projects/      projects.ts projects.html projects.css
      clients/       clients.ts clients.html  clients.css
      contact/       contact.ts  contact.html  contact.css
      admin/         admin.component.ts ...
      public-route/  public-route.component.ts  (lazy shell)
    models/
      company-data.model.ts    (TypeScript interfaces)
    services/
      company-data.service.ts  (ALL content — primary edit target)
  styles.css         (global CSS variables + shared utility classes)
public/
  images/
    company/         ms-sarker-banner.png  (body background, 1920px wide)
    products/        ~23 product & gallery images (.png / .jpeg)
```

---

## Routing

All pages load through `PublicRouteComponent` (lazy shell). The `admin` route loads `AdminComponent` directly.

```
/           → home
/about      → about
/products   → products
/projects   → projects
/clients    → clients
/contact    → contact
/admin      → admin
**          → redirect to /
```

---

## Design system (CSS variables)

Defined in `src/styles.css` `:root`:

| Variable | Value |
|---|---|
| `--brand-bg` | `#0f1216` (page background) |
| `--brand-surface` | `#171d24` (card/panel bg) |
| `--brand-text` | `#ffffff` |
| `--brand-muted` | `#cdd5e0` |
| `--brand-faint` | `#a2b0c0` |
| `--brand-accent` | `#f6b13d` (amber — primary highlight) |
| `--brand-border` | `rgba(255,255,255,0.1)` |
| `--brand-border-strong` | `rgba(246,177,61,0.32)` |
| `--brand-success` | `#2cc978` |
| `--brand-danger` | `#e35d5d` |
| `--brand-shadow` | `0 22px 70px rgba(0,0,0,0.38)` |

Cards use `background: rgba(255,255,255,0.05); backdrop-filter: blur(4px)` for glassmorphism over the body background image.

---

## Product data model

```typescript
interface Product {
  id: string;                    // unique slug, never rename after creation
  category: string;              // meta label shown above card title
  icon: string;                  // Bootstrap Icon class e.g. 'bi-sun'
  name: string;
  description: string;
  brands: string[];              // rendered as badge pills
  specs: string[];               // rendered as checkmark bullet list
  imageUrl?: string;             // default card image
  images?: string[];             // enables gallery when length > 1
  imageSourceUrl?: string;       // optional external credit link
  sectionOrder?: ('description' | 'brands' | 'specs')[];  // default: description→brands→specs
  tags?: string[];               // internal, not displayed
}
```

Image paths use `/images/products/filename.ext` which maps to `public/images/products/`.

---

## Product gallery & lightbox

**Gallery** activates automatically when `images` array has > 1 entry:
- Clicking the card image cycles through images
- Dot indicators show current position
- A photo-stack badge appears in the top-right corner

**Lightbox** opens via the expand button (⛶) on the card:
- Click image → zoom 2.5×; click again → zoom out
- Drag while zoomed → pan
- Arrow keys ← → navigate between images
- Dots at bottom → jump to image
- Esc or × → close
- Implemented in `products.ts` with `@HostListener('document:keydown')`
- Uses CSS `transform: translate() scale()` only — never `overflow: auto` on the frame (prevents scrollbars during zoom)

---

## Common content update tasks

### Update product text / brands / specs
Find the product by `id` in the `products` array in `company-data.service.ts` and edit the relevant fields.

### Change product order
Reorder the objects in the `products` array. Display order = array order.

### Add a product image (single)
1. Copy image to `public/images/products/`
2. Set `imageUrl: '/images/products/filename.ext'` on the product

### Add a gallery to a product
1. Copy all images to `public/images/products/`
2. Add `images: ['/images/products/img1.png', '/images/products/img2.png', ...]`
3. Set `imageUrl` to the first gallery image (shown as card default)

### Add a new product
Insert a new object into the `products` array at the desired position. Use a unique `id` (lowercase, hyphen-separated). Copy image(s) to `public/images/products/`.

### Update company info (name, phone, email, tagline)
Edit the `company` object at the top of `company-data.service.ts`:
- `tagline` → shown under "M/S SARKER" on the home hero
- `slogan` → secondary hero line (hidden when empty string)
- `phone1`, `phone2`, `email`, `address`, `facebook`, `youtube`

### Update background image
Replace `public/images/company/ms-sarker-banner.png`. Recommended minimum width: 1920px. The CSS is in `src/styles.css` body background.

---

## Build & deploy

```bash
npm run build          # verify before pushing — catches TypeScript errors
git add <files>
git commit -m "..."
git push origin main   # triggers GitHub Actions → live in ~1 min
gh run list --limit 3  # check CI status
```

CSS budget limits in `angular.json`: `maximumWarning: 8kb`, `maximumError: 16kb` per component stylesheet.

---

## Key constraints

- **Never use `overflow: auto` on `.lb-image-wrap`** — causes scrollbars when the lightbox image is zoomed. Always keep `overflow: hidden` and use CSS `transform` for zoom/pan.
- **`imageIndexMap`** in `products.ts` tracks which gallery image is currently shown per product (keyed by `product.id`). Reset to 0 on `ngOnInit`.
- Projects are sorted ascending by year in `projects.ts`: `parseInt(a.year.split('–')[0], 10)`.
- The `sectionOrder` field on a product must be cast: `as ('description' | 'brands' | 'specs')[]` to satisfy TypeScript strict mode.
