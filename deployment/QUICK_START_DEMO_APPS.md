# Quick Start: Deploying Demo Apps

## TL;DR

```bash
# 1. On Server: Setup directories
cd /var/sjdevnext15/deployment
chmod +x 07-setup-demo-apps.sh 08-deploy-react-app.sh
sudo ./07-setup-demo-apps.sh

# 2. Update nginx config
sudo cp nginx-sjdev-with-apps.conf /etc/nginx/sites-available/sjdev.co
sudo nginx -t && sudo systemctl reload nginx

# 3. Build your React app locally with homepage set
# In your React app's package.json:
# "homepage": "/demos/salesflow"  (or bookbrowser, budgetize)

cd /path/to/your-react-app
npm run build

# 4. Deploy (choose one method)

## Method A: From server (if code is on server)
./08-deploy-react-app.sh salesflow /path/to/salesflow/build

## Method B: From local machine
rsync -avz --delete ./build/ USER@SERVER_IP:/var/www/sjdev-demo-apps/salesflow/
```

## URLs After Deployment

- Sales Flow: `https://sjdev.co/demos/salesflow`
- Book Browser: `https://sjdev.co/demos/bookbrowser`
- Budgetize: `https://sjdev.co/demos/budgetize`

## React App Configuration

### package.json
```json
{
  "homepage": "/demos/[app-name]"
}
```

### For React Router apps (choose one):

**Option 1: HashRouter** (recommended for demos)
```javascript
import { HashRouter } from 'react-router-dom';

<HashRouter>
  <App />
</HashRouter>
```

**Option 2: BrowserRouter with basename**
```javascript
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter basename="/demos/salesflow">
  <App />
</BrowserRouter>
```

## API Calls from Demo Apps

If your demo apps need to call the backend:

```javascript
// Use the /api/ prefix which nginx proxies to port 3001
fetch('/api/v1/lm-prompt', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ prompt: 'Hello' })
});
```

## Updating Links in Main Site

In `sjdevnext15Frontend/src/app/webapps/page.js`:

```javascript
<a href="/demos/salesflow">View Sales Flow Demo</a>
<a href="/demos/bookbrowser">View Book Browser Demo</a>
<a href="/demos/budgetize">View Budgetize Demo</a>
```

## Troubleshooting

**Assets not loading?**
- Check `homepage` in package.json
- Rebuild after changing homepage

**Page refresh 404?**
- Use HashRouter OR BrowserRouter with basename

**Permission errors?**
```bash
sudo chown -R $USER:$USER /var/www/sjdev-demo-apps
```

See `DEMO_APPS_DEPLOYMENT.md` for full documentation.

