# Demo Apps Deployment Guide

This guide explains how to deploy independent React application builds to your sjdev.co server.

## Architecture Overview

Your server now supports three types of applications:
1. **Next.js Frontend** (port 3000) - Main sjdevnext15 application
2. **Express Backend** (port 3001) - API endpoints for AI/ML RAG agents
3. **Demo React Apps** (static files) - Standalone demo applications served by nginx

## Directory Structure

```
/var/www/sjdev-demo-apps/
├── salesflow/       # Sales Flow demo
├── bookbrowser/     # Book Browser demo
├── budgetize/       # Budgetize demo
└── backups/         # Automatic backups of previous deployments
```

## Demo App URLs

After deployment, your apps will be available at:
- Sales Flow: `https://sjdev.co/demos/salesflow`
- Book Browser: `https://sjdev.co/demos/bookbrowser`
- Budgetize: `https://sjdev.co/demos/budgetize`

## Initial Server Setup

### Step 1: Setup Demo Apps Directory Structure

```bash
cd /var/sjdevnext15/deployment
chmod +x 07-setup-demo-apps.sh
sudo ./07-setup-demo-apps.sh
```

This creates the directory structure and placeholder files.

### Step 2: Update Nginx Configuration

```bash
# Backup current configuration
sudo cp /etc/nginx/sites-available/sjdev.co /etc/nginx/sites-available/sjdev.co.backup

# Copy new configuration with demo apps support
sudo cp nginx-sjdev-with-apps.conf /etc/nginx/sites-available/sjdev.co

# Test configuration
sudo nginx -t

# If test passes, reload nginx
sudo systemctl reload nginx
```

## Deploying React Apps

### Preparing Your React App for Deployment

1. **Update package.json** - Add homepage for proper asset paths:

```json
{
  "name": "salesflow",
  "version": "1.0.0",
  "homepage": "/demos/salesflow",
  ...
}
```

2. **Build your app**:

```bash
cd /path/to/your-react-app
npm run build
```

This creates a `build` directory with production-ready files.

### Deploying to Server

#### Option 1: Deploy from Server (Recommended)

If your React app code is on the server:

```bash
cd /var/sjdevnext15/deployment
chmod +x 08-deploy-react-app.sh

# Deploy Sales Flow
./08-deploy-react-app.sh salesflow /path/to/salesflow/build

# Deploy Book Browser
./08-deploy-react-app.sh bookbrowser /path/to/bookbrowser/build

# Deploy Budgetize
./08-deploy-react-app.sh budgetize /path/to/budgetize/build
```

#### Option 2: Deploy from Local Machine

If building locally, use rsync or scp:

```bash
# Build locally
npm run build

# Copy to server (replace USER and SERVER_IP)
rsync -avz --delete ./build/ USER@SERVER_IP:/var/www/sjdev-demo-apps/salesflow/

# OR use scp
scp -r ./build/* USER@SERVER_IP:/var/www/sjdev-demo-apps/salesflow/
```

## Updating Links in Your Web Apps Page

Update the links in your Next.js frontend (`sjdevnext15Frontend/src/app/webapps/page.js`) to point to the demo URLs:

```javascript
// Example link updates
<a href="/demos/salesflow" target="_blank">View Sales Flow Demo</a>
<a href="/demos/bookbrowser" target="_blank">View Book Browser Demo</a>
<a href="/demos/budgetize" target="_blank">View Budgetize Demo</a>
```

## Important Notes for React Apps with Router

If your React apps use React Router, you need to configure them properly:

### For React Router Apps

1. **Use HashRouter** (easiest):

```javascript
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      {/* Your routes */}
    </HashRouter>
  );
}
```

2. **Or use BrowserRouter with basename**:

```javascript
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/demos/salesflow">
      {/* Your routes */}
    </BrowserRouter>
  );
}
```

### For Create React App

Update `package.json`:

```json
{
  "homepage": "/demos/salesflow"
}
```

## Troubleshooting

### Issue: 404 errors on page refresh

**Solution**: Apps are already configured with `try_files` fallback in nginx. If still having issues, ensure your app uses HashRouter or proper basename.

### Issue: Assets not loading (CSS/JS 404s)

**Solution**: 
1. Check that `homepage` is set correctly in `package.json`
2. Rebuild the app after changing homepage
3. Check browser console for actual asset paths

### Issue: CORS errors when calling backend

**Solution**: Update your React app's API calls to use the `/api/` prefix:

```javascript
// Instead of: http://localhost:3001/v1/lm-prompt
// Use: /api/v1/lm-prompt

fetch('/api/v1/lm-prompt', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ prompt: 'Hello' })
});
```

### Issue: Permission denied

**Solution**: 
```bash
sudo chown -R $USER:$USER /var/www/sjdev-demo-apps
sudo chmod -R 755 /var/www/sjdev-demo-apps
```

## Automated Deployment Script (Optional)

Create a deployment script for continuous deployment:

```bash
#!/bin/bash
# deploy-all-demos.sh

APPS=("salesflow" "bookbrowser" "budgetize")

for APP in "${APPS[@]}"; do
    echo "Deploying $APP..."
    cd "/path/to/$APP"
    npm install
    npm run build
    ./08-deploy-react-app.sh "$APP" "./build"
done

echo "All demos deployed!"
```

## Monitoring and Logs

Check nginx logs for demo app access:

```bash
# Access logs
sudo tail -f /var/log/nginx/access.log | grep "demos"

# Error logs
sudo tail -f /var/log/nginx/error.log
```

## Rollback

If you need to rollback to a previous version:

```bash
# List backups
ls -la /var/www/sjdev-demo-apps/backups/

# Restore from backup
cp -r /var/www/sjdev-demo-apps/backups/salesflow-YYYYMMDD-HHMMSS/* /var/www/sjdev-demo-apps/salesflow/
```

## Security Considerations

1. **Static Files Only**: Demo apps serve only static files (HTML, CSS, JS)
2. **HTTPS Enforced**: All traffic uses SSL/TLS
3. **Security Headers**: Configured in nginx (HSTS, X-Frame-Options, etc.)
4. **API Proxy**: Backend API accessed through nginx proxy to avoid CORS
5. **File Permissions**: Apps run with limited permissions (755)

## Performance Optimization

The nginx configuration includes:
- Asset caching (1 year for immutable assets)
- gzip compression (configured in nginx main config)
- Proper Content-Type headers
- Cache-Control headers

To further optimize, ensure your React apps:
- Use code splitting
- Lazy load routes
- Optimize images
- Minify assets (done automatically by `npm run build`)

