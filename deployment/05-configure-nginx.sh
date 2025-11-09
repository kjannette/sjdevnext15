#!/bin/bash
# Configure NGINX for sjdev.co
# Run this script with sudo

set -e  # Exit on error

SITE_NAME="sjdev.co"
NGINX_AVAILABLE="/etc/nginx/sites-available/$SITE_NAME"
NGINX_ENABLED="/etc/nginx/sites-enabled/$SITE_NAME"

echo "================================"
echo "Configuring NGINX for $SITE_NAME"
echo "================================"

# Remove default NGINX site
echo "Removing default NGINX site..."
sudo rm -f /etc/nginx/sites-enabled/default

# Copy nginx configuration
echo "Copying NGINX configuration..."
sudo cp /var/sjdevnext15/deployment/nginx-sjdev.conf $NGINX_AVAILABLE

# Create symlink to enable site
echo "Enabling site..."
sudo ln -sf $NGINX_AVAILABLE $NGINX_ENABLED

# Test NGINX configuration
echo "Testing NGINX configuration..."
sudo nginx -t

# Reload NGINX
echo "Reloading NGINX..."
sudo systemctl reload nginx

echo "================================"
echo "NGINX configured successfully!"
echo "================================"
echo ""
echo "You can now test your site at http://YOUR_ELASTIC_IP"
echo "Next step: Install SSL certificate with Certbot"

