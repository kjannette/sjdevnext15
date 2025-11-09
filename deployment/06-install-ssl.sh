#!/bin/bash
# Install SSL Certificate with Let's Encrypt
# Run this script with sudo AFTER DNS has propagated

set -e  # Exit on error

DOMAIN="sjdev.co"
EMAIL="your-email@example.com"  # UPDATE THIS!

echo "================================"
echo "Installing SSL Certificate"
echo "================================"
echo ""
echo "⚠️  IMPORTANT: Make sure DNS has propagated before running this!"
echo "   Test with: dig $DOMAIN"
echo "   It should point to your Elastic IP"
echo ""
read -p "Press Enter to continue or Ctrl+C to cancel..."

# Install Certbot
echo "Installing Certbot..."
sudo apt install -y certbot python3-certbot-nginx

# Obtain SSL certificate
echo "Obtaining SSL certificate for $DOMAIN and www.$DOMAIN..."
sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email $EMAIL --redirect

# Test automatic renewal
echo "Testing automatic renewal..."
sudo certbot renew --dry-run

echo "================================"
echo "SSL Certificate installed!"
echo "================================"
echo ""
echo "Your site should now be accessible at https://$DOMAIN"
echo "HTTP requests will automatically redirect to HTTPS"
echo ""
echo "Certbot will automatically renew certificates before they expire."

