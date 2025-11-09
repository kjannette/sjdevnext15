# sjdev.co Server Architecture

## System Architecture Overview

```
Internet (HTTPS/HTTP)
         |
         v
    ┌─────────────────────────────────────────┐
    │         NGINX (Port 80/443)             │
    │     SSL/TLS Termination & Routing       │
    └─────────────────────────────────────────┘
         |
         |-----> Route: /
         |       └─> Proxy to Next.js (Port 3000)
         |
         |-----> Route: /api/*
         |       └─> Proxy to Express Backend (Port 3001)
         |
         |-----> Route: /demos/salesflow
         |       └─> Static files: /var/www/sjdev-demo-apps/salesflow/
         |
         |-----> Route: /demos/bookbrowser
         |       └─> Static files: /var/www/sjdev-demo-apps/bookbrowser/
         |
         └-----> Route: /demos/budgetize
                 └─> Static files: /var/www/sjdev-demo-apps/budgetize/
```

## Application Components

### 1. Next.js Frontend (Port 3000)
- **Location**: `/var/sjdevnext15/frontend/`
- **Type**: Server-Side Rendered React Application
- **Purpose**: Main sjdev.co website
- **Routes**: 
  - `/` - Home
  - `/appliedai` - Applied AI page
  - `/webapps` - Web Applications showcase
  - `/contact` - Contact page
  - `/login` - Login page
  - `/peitho` - Founder page

### 2. Express Backend (Port 3001)
- **Location**: `/var/sjdevnext15/backend/`
- **Type**: Node.js/Express API Server
- **Purpose**: AI/ML RAG agents and API endpoints
- **Endpoints**:
  - `POST /v1/lm-prompt` - ML model queries
  - `POST /v1/lm-cr-query` - S.J. info queries
  - `POST /v1/lm-app-info` - Apps info queries
- **Features**: 
  - Vector embeddings
  - RAG (Retrieval Augmented Generation)
  - PDF document processing

### 3. Demo React Apps (Static Files)
- **Location**: `/var/www/sjdev-demo-apps/`
- **Type**: Static HTML/CSS/JS builds
- **Purpose**: Showcase previous work/demos
- **Apps**:
  1. **Sales Flow** (`/demos/salesflow`)
     - React UI for automotive retail sales
     - KPI/workflow dashboard
     - Vehicle history queue
  
  2. **Book Browser** (`/demos/bookbrowser`)
     - React UI for book retail
     - Sales and inventory management
     - MySQL API integration
  
  3. **Budgetize** (`/demos/budgetize`)
     - SaaS member dashboard
     - Budget management views
     - Business association portal

## Network Flow

### User Request Flow

```
1. User browses to https://sjdev.co/webapps
   ├─> nginx receives request on port 443 (HTTPS)
   ├─> nginx proxies to Next.js on port 3000
   └─> Next.js renders page and sends to user

2. User clicks "View Demo" link to /demos/salesflow
   ├─> nginx receives request
   ├─> nginx serves static files from /var/www/sjdev-demo-apps/salesflow/
   └─> React SPA loads in browser

3. Demo app makes API call to /api/v1/lm-prompt
   ├─> nginx receives request to /api/v1/lm-prompt
   ├─> nginx proxies to Express backend on port 3001 (/v1/lm-prompt)
   ├─> Express processes with RAG agent
   └─> Response sent back through nginx to demo app
```

## File System Layout

```
/var/
├── sjdevnext15/
│   ├── frontend/               # Next.js application
│   │   ├── .next/             # Next.js build output
│   │   ├── src/
│   │   │   ├── app/
│   │   │   └── components/
│   │   └── public/
│   │
│   ├── backend/               # Express backend
│   │   ├── agent_*.js        # RAG agents
│   │   ├── app.js            # Express server
│   │   ├── data/             # PDF documents
│   │   └── embedQuery.js     # Vector embeddings
│   │
│   └── deployment/           # Deployment scripts
│       ├── nginx-sjdev-with-apps.conf
│       ├── 07-setup-demo-apps.sh
│       └── 08-deploy-react-app.sh
│
└── www/
    └── sjdev-demo-apps/      # Demo React apps
        ├── salesflow/
        │   ├── index.html
        │   ├── static/
        │   └── manifest.json
        ├── bookbrowser/
        │   ├── index.html
        │   └── static/
        ├── budgetize/
        │   ├── index.html
        │   └── static/
        └── backups/          # Automatic backups
```

## Port Usage

| Port | Application | Protocol | Access |
|------|-------------|----------|--------|
| 80   | nginx       | HTTP     | Public (redirects to 443) |
| 443  | nginx       | HTTPS    | Public |
| 3000 | Next.js     | HTTP     | Internal only (via nginx) |
| 3001 | Express API | HTTP     | Internal only (via nginx) |

## Security Layers

1. **SSL/TLS Encryption**
   - Let's Encrypt certificates
   - Automatic renewal
   - HTTPS enforced

2. **Nginx Security Headers**
   - HSTS (HTTP Strict Transport Security)
   - X-Frame-Options: SAMEORIGIN
   - X-Content-Type-Options: nosniff
   - X-XSS-Protection

3. **Network Isolation**
   - Backend services not directly accessible from internet
   - All traffic routed through nginx reverse proxy

4. **File Permissions**
   - Static files: 755 (read/execute for all, write for owner)
   - Application files: Owned by deployment user
   - nginx runs as www-data user

## Caching Strategy

### Static Assets (Demo Apps)
- JS/CSS/Images: 1 year cache
- Cache-Control: public, immutable
- Served directly by nginx (fast)

### Next.js Static Assets
- `/_next/static`: 1 hour cache
- `public` folder: 1 hour cache
- Proxied through nginx

### Dynamic Content
- API responses: No cache
- Server-rendered pages: No cache

## Deployment Process

### Next.js Frontend
1. Build: `npm run build`
2. Deploy: PM2 process manager
3. Port: 3000

### Express Backend
1. Deploy: Node.js with PM2
2. Port: 3001
3. Auto-restart on crash

### Demo Apps
1. Build: `npm run build` (in each React app)
2. Deploy: Copy to `/var/www/sjdev-demo-apps/[app-name]/`
3. Automatic backup of previous version
4. No process manager needed (static files)

## Monitoring & Logs

### Nginx Logs
- Access: `/var/log/nginx/access.log`
- Errors: `/var/log/nginx/error.log`

### Application Logs
- Next.js: PM2 logs
- Express: PM2 logs

### Useful Commands
```bash
# View nginx access logs for demo apps
sudo tail -f /var/log/nginx/access.log | grep "demos"

# Check nginx status
sudo systemctl status nginx

# Check PM2 processes
pm2 list
pm2 logs

# Test nginx config
sudo nginx -t
```

## Scalability Considerations

**Current Setup**: Single server, suitable for demo/portfolio site

**Future Enhancements**:
- Load balancer for multiple backend instances
- CDN for static assets
- Database for persistent storage
- Redis for session management
- Docker containers for isolation
- CI/CD pipeline for automated deployments

## Backup Strategy

### Automated
- Demo apps: Automatic backup before each deployment
- Location: `/var/www/sjdev-demo-apps/backups/`

### Manual (Recommended)
- Application code: Git repository
- Server config: Version control in deployment folder
- Database: Regular exports (if applicable)
- SSL certificates: Backed up automatically by certbot

## Technology Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| OS | Ubuntu | 24.04 LTS |
| Web Server | nginx | Latest |
| SSL | Let's Encrypt | Auto-renewing |
| Frontend Framework | Next.js | 15 |
| Frontend Runtime | Node.js | Latest LTS |
| Backend Framework | Express | Latest |
| Backend Runtime | Node.js | Latest LTS |
| Process Manager | PM2 | Latest |
| Demo Apps | React | Various |

## DNS Configuration

```
sjdev.co        A      -> [SERVER_IP]
www.sjdev.co    CNAME  -> sjdev.co
```

## SSL Certificate

- Provider: Let's Encrypt
- Auto-renewal: Yes (certbot)
- Renewal check: Twice daily
- Certificate location: `/etc/letsencrypt/live/sjdev.co/`

