#!/bin/bash
# Application Deployment Script
# Run this script as ubuntu user (not root)

set -e  # Exit on error

APP_DIR="/var/sjdevnext15"
REPO_URL="https://github.com/YOUR_USERNAME/YOUR_REPO.git"  # UPDATE THIS!

echo "================================"
echo "Deploying sjdev.co Application"
echo "================================"

# Clone repository
echo "Cloning repository to $APP_DIR..."
cd /var
if [ -d "$APP_DIR/.git" ]; then
    echo "Repository already exists, pulling latest changes..."
    cd $APP_DIR
    git pull origin main
else
    sudo rm -rf $APP_DIR  # Remove directory if it exists but isn't a git repo
    git clone $REPO_URL $APP_DIR
    cd $APP_DIR
fi

# Create .env.local file for environment variables
echo "Creating environment variables file..."
cat > $APP_DIR/.env.local << 'EOF'
# Add your environment variables here
NODE_ENV=production
EOF

echo ""
echo "⚠️  IMPORTANT: You need to add your Firebase configuration to .env.local"
echo "Edit the file: nano $APP_DIR/.env.local"
echo ""

# Install dependencies
echo "Installing npm dependencies..."
npm install

# Build the Next.js application
echo "Building Next.js application..."
npm run build

echo "================================"
echo "Build complete!"
echo "================================"
echo ""
echo "Next steps:"
echo "1. Edit .env.local with your Firebase credentials"
echo "2. Start the application with PM2"
echo "3. Install and configure NGINX"

