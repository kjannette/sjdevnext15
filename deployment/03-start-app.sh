#!/bin/bash
# Start Next.js Application with PM2
# Run this script as ubuntu user

set -e  # Exit on error

APP_DIR="/var/sjdevnext15"
APP_NAME="sjdevnext15"

echo "================================"
echo "Starting Application with PM2"
echo "================================"

cd $APP_DIR

# Stop existing PM2 process if it exists
pm2 delete $APP_NAME 2>/dev/null || true

# Start the application with PM2
echo "Starting Next.js app on port 3000..."
pm2 start npm --name "$APP_NAME" -- start

# Save PM2 process list
pm2 save

# Show status
pm2 status

echo "================================"
echo "Application started successfully!"
echo "================================"
echo ""
echo "Useful PM2 commands:"
echo "  pm2 logs $APP_NAME      # View logs"
echo "  pm2 restart $APP_NAME   # Restart app"
echo "  pm2 stop $APP_NAME      # Stop app"
echo "  pm2 status              # View status"

