# 🚀 Deployment Guide

This guide covers various ways to deploy your developer portfolio to popular hosting platforms.

## 📋 Pre-deployment Checklist

Before deploying, make sure you've:

- [ ] Updated all personal information in the components
- [ ] Added your own projects to the Projects section
- [ ] Updated social links and contact information
- [ ] Optimized images (convert to WebP if possible)
- [ ] Tested the build locally with `npm run build && npm run preview`
- [ ] Configured environment variables if needed
- [ ] Updated SEO meta tags in `index.html`

## 🌐 Deployment Options

### 1. Vercel (Recommended)

Vercel offers excellent performance and is perfect for React applications.

#### Steps:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click "Deploy"

#### Custom Domain:

1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### 2. Netlify

Great for static sites with excellent CI/CD integration.

#### Steps:

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your GitHub repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

#### Netlify Configuration File:

Create `netlify.toml` in your project root:

```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

### 3. GitHub Pages

Free hosting for public repositories.

#### Steps:

1. Install gh-pages package:

   ```bash
   npm install --save-dev gh-pages
   ```

2. Add deployment scripts to `package.json`:

   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Add homepage field to `package.json`:

   ```json
   {
     "homepage": "https://yourusername.github.io/developer-portfolio"
   }
   ```

4. Configure Vite for GitHub Pages in `vite.config.js`:

   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/developer-portfolio/',
   });
   ```

5. Deploy:
   ```bash
   npm run deploy
   ```

### 4. AWS S3 + CloudFront

For those who prefer AWS infrastructure.

#### Steps:

1. Build your project:

   ```bash
   npm run build
   ```

2. Create S3 bucket and upload `dist` folder contents
3. Configure bucket for static website hosting
4. Set up CloudFront distribution for HTTPS and caching
5. Configure Route 53 for custom domain (optional)

### 5. Firebase Hosting

Google's hosting platform with excellent performance.

#### Steps:

1. Install Firebase CLI:

   ```bash
   npm install -g firebase-tools
   ```

2. Initialize Firebase in your project:

   ```bash
   firebase init hosting
   ```

3. Configure `firebase.json`:

   ```json
   {
     "hosting": {
       "public": "dist",
       "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

4. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

## 🔧 Build Optimization

### Environment Variables

For production builds, you might want to use environment variables:

1. Create `.env.production`:

   ```env
   VITE_APP_ENV=production
   VITE_API_URL=https://api.yoursite.com
   ```

2. Use in your code:
   ```javascript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

### Performance Optimization

1. **Image Optimization**:
   - Use WebP format for images
   - Implement lazy loading
   - Compress images before deployment

2. **Bundle Analysis**:

   ```bash
   npm install --save-dev rollup-plugin-analyzer
   ```

3. **Code Splitting**:
   ```javascript
   const LazyComponent = lazy(() => import('./LazyComponent'));
   ```

### Build Size Optimization

1. **Analyze bundle size**:

   ```bash
   npm run build
   npx vite-bundle-analyzer dist
   ```

2. **Tree shaking**: Ensure you're only importing what you need:

   ```javascript
   // Good
   import { motion } from 'framer-motion';

   // Avoid
   import * as FramerMotion from 'framer-motion';
   ```

## 🔐 Security Best Practices

1. **Environment Variables**: Never commit sensitive data
2. **HTTPS**: Always use HTTPS in production
3. **Headers**: Configure security headers
4. **Dependencies**: Keep dependencies updated

## 📈 Performance Monitoring

### Google Analytics

Add to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Web Vitals

Monitor Core Web Vitals:

```bash
npm install web-vitals
```

```javascript
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

## 🔄 Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🐛 Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check Node.js version compatibility
   - Clear node_modules and reinstall
   - Check for ESLint errors

2. **Route Issues**:
   - Configure redirects for SPA routing
   - Check base URL configuration

3. **Asset Loading**:
   - Verify asset paths in production
   - Check CORS settings for external assets

### Debug Commands

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for outdated packages
npm outdated

# Audit for vulnerabilities
npm audit

# Test production build locally
npm run build
npm run preview
```

## 📞 Support

If you encounter any deployment issues, please:

1. Check the [Issues](https://github.com/yourusername/developer-portfolio/issues) page
2. Create a new issue with detailed error messages
3. Include your build logs and configuration

Happy deploying! 🚀
