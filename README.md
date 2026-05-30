# EmbraceIN Wellness

Birth doula support, yoga, meditation, and feminine empowerment workshops in Sandton, Johannesburg.

## Run Locally

**Prerequisites:** Node.js, pnpm

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Run the app:
   ```bash
   pnpm dev
   ```

## Deploy to GitHub Pages

1. Build the site:
   ```bash
   pnpm build
   ```

2. Push the `dist/` folder to the `gh-pages` branch:
   ```bash
   pnpx gh-pages -d dist
   ```

   Or use GitHub Actions for automatic deployment on push.