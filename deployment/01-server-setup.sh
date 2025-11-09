#!/bin/bash
# Server Setup Script for Ubuntu 24.04
# Run this script on your EC2 instance as root or with sudo

set -e  # Exit on error

echo "================================"
echo "Starting Server Setup for sjdev.co"
echo "================================"

# Update system packages
echo "Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install essential tools
echo "Installing essential tools..."
sudo apt install -y git curl wget build-essential

# Install Node.js 20.x (LTS)
echo "Installing Node.js 20.x..."
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify Node.js and npm installation
echo "Node.js version: $(node --version)"
echo "npm version: $(npm --version)"

# Install PM2 globally (process manager for Node.js)
echo "Installing PM2..."
sudo npm install -g pm2

# Set up PM2 to start on system boot
echo "Configuring PM2 startup..."
sudo pm2 startup systemd -u ubuntu --hp /home/ubuntu
# Note: The command above will output another command you need to run - copy and execute it

# Create application directory
echo "Creating application directory..."
sudo mkdir -p /var/sjdevnext15
sudo mkdir -p /var/www

# Set ownership to ubuntu user
sudo chown -R ubuntu:ubuntu /var/sjdevnext15
sudo chown -R ubuntu:ubuntu /var/www

# Configure Git
echo "Configuring Git..."
git config --global user.name "Server Deploy"
git config --global user.email "deploy@sjdev.co"

echo "================================"
echo "Server setup complete!"
echo "================================"
echo ""
echo "Next steps:"
echo "1. Clone your repository to /var/sjdevnext15"
echo "2. Set up environment variables"
echo "3. Build the application"

