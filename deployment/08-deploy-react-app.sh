#!/bin/bash
# Deploy React app build to server
# Usage: ./08-deploy-react-app.sh <app-name> <build-directory>
# Example: ./08-deploy-react-app.sh salesflow /path/to/salesflow/build

set -e  # Exit on error

# Check arguments
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <app-name> <build-directory>"
    echo ""
    echo "Available app names:"
    echo "  - salesflow"
    echo "  - bookbrowser"
    echo "  - budgetize"
    echo ""
    echo "Example: $0 salesflow /path/to/salesflow/build"
    exit 1
fi

APP_NAME=$1
BUILD_DIR=$2
APPS_ROOT="/var/www/sjdev-demo-apps"
TARGET_DIR="$APPS_ROOT/$APP_NAME"

# Validate app name
if [[ ! "$APP_NAME" =~ ^(salesflow|bookbrowser|budgetize)$ ]]; then
    echo "Error: Invalid app name '$APP_NAME'"
    echo "Valid names: salesflow, bookbrowser, budgetize"
    exit 1
fi

# Validate build directory exists
if [ ! -d "$BUILD_DIR" ]; then
    echo "Error: Build directory '$BUILD_DIR' does not exist"
    exit 1
fi

# Validate build directory has index.html
if [ ! -f "$BUILD_DIR/index.html" ]; then
    echo "Error: Build directory must contain index.html"
    exit 1
fi

echo "================================"
echo "Deploying $APP_NAME"
echo "================================"
echo "Source: $BUILD_DIR"
echo "Target: $TARGET_DIR"
echo ""

# Backup existing deployment if it exists
if [ -d "$TARGET_DIR" ] && [ "$(ls -A $TARGET_DIR)" ]; then
    BACKUP_DIR="$APPS_ROOT/backups/$APP_NAME-$(date +%Y%m%d-%H%M%S)"
    echo "Creating backup at: $BACKUP_DIR"
    mkdir -p "$APPS_ROOT/backups"
    cp -r "$TARGET_DIR" "$BACKUP_DIR"
fi

# Clear target directory
echo "Clearing target directory..."
rm -rf "$TARGET_DIR"/*

# Copy build files
echo "Copying build files..."
cp -r "$BUILD_DIR"/* "$TARGET_DIR/"

# Set proper permissions
echo "Setting permissions..."
chmod -R 755 "$TARGET_DIR"

echo "================================"
echo "Deployment complete!"
echo "================================"
echo ""
echo "Your app should now be available at:"
echo "  https://sjdev.co/demos/$APP_NAME"
echo ""
echo "If nginx hasn't been updated yet, run:"
echo "  sudo cp deployment/nginx-sjdev-with-apps.conf /etc/nginx/sites-available/sjdev.co"
echo "  sudo nginx -t && sudo systemctl reload nginx"

