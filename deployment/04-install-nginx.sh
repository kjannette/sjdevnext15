#!/bin/bash
# Install and Configure NGINX
# Run this script with sudo

set -e  # Exit on error

echo "================================"
echo "Installing NGINX"
echo "================================"

# Install NGINX
sudo apt install -y nginx

# Start and enable NGINX
sudo systemctl start nginx
sudo systemctl enable nginx

# Check NGINX status
sudo systemctl status nginx

echo "================================"
echo "NGINX installed successfully!"
echo "================================"
echo ""
echo "Next step: Configure NGINX for sjdev.co"

