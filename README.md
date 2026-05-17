# M/S SARKER — Angular Conversion

This project has been converted from a static HTML/JS application to a modern **Angular** project using **TypeScript** and **Best Practices**.

## ⚡ Quick Start

To start the development server, run:

```bash
npm start
```

Once the server is running, navigate to `http://localhost:4200/`.

## 🏗️ Project Structure

- `src/app/components`: Separate components for each page (Navbar, Home, Products, etc.).
- `src/app/models`: TypeScript interfaces for data structures.
- `src/app/services`: Services for data management (`CompanyDataService`).
- `src/app/app.routes.ts`: Centralized routing configuration.
- `legacy/`: Contains the original static files for reference.

## 🛠️ Key Improvements

- **Angular Best Practices**: Components use separate HTML/CSS files.
- **TypeScript**: Full type safety for company data, products, and projects.
- **Service-Oriented Architecture**: Centralized data management via `CompanyDataService`.
- **Global Styles**: Centralized CSS in `src/styles.css`.
- **CORS Resolved**: Running via `npm start` (local dev server) eliminates CORS issues associated with the `file://` protocol.

## 🚀 Deployment

To build the project for production:

```bash
npm run build
```
