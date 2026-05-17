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

### Option 1: GitHub Pages (Automatic)
The easiest way to deploy is using the included GitHub Actions workflow.

1.  **Push your code** to GitHub.
2.  Go to your repository on GitHub.
3.  Navigate to **Settings** > **Pages**.
4.  Under **Build and deployment** > **Source**, select **"GitHub Actions"**.
5.  Your site will automatically build and deploy every time you push to the `main` branch.

### Option 2: Manual Deployment
If you want to host it elsewhere (Netlify, Vercel, or your own server):

1.  **Build the project**:
    ```bash
    npm run build
    ```
2.  **Upload the files**:
    The deployment-ready files are located in `dist/ms-sarker/browser/`.
3.  **Note**: The project is configured with `withHashLocation()`, so it works perfectly on static hosts without extra configuration.
# deploy
