#!/bin/bash
# Setup directory structure for demo apps
# Run this script with sudo

set -e  # Exit on error

APPS_ROOT="/var/www/sjdev-demo-apps"

echo "================================"
echo "Setting up Demo Apps Directory"
echo "================================"

# Create main directory
echo "Creating directory structure..."
sudo mkdir -p $APPS_ROOT/{salesflow,bookbrowser,budgetize}

# Set proper permissions
echo "Setting permissions..."
sudo chown -R $USER:$USER $APPS_ROOT
sudo chmod -R 755 $APPS_ROOT

# Create placeholder index.html files
echo "Creating placeholder files..."

cat > /tmp/salesflow-index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sales Flow Demo</title>
</head>
<body>
    <h1>Sales Flow Demo</h1>
    <p>This is a placeholder. Deploy your React build here.</p>
</body>
</html>
EOF

cat > /tmp/bookbrowser-index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Browser Demo</title>
</head>
<body>
    <h1>Book Browser Demo</h1>
    <p>This is a placeholder. Deploy your React build here.</p>
</body>
</html>
EOF

cat > /tmp/budgetize-index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Budgetize Demo</title>
</head>
<body>
    <h1>Budgetize Demo</h1>
    <p>This is a placeholder. Deploy your React build here.</p>
</body>
</html>
EOF

sudo mv /tmp/salesflow-index.html $APPS_ROOT/salesflow/index.html
sudo mv /tmp/bookbrowser-index.html $APPS_ROOT/bookbrowser/index.html
sudo mv /tmp/budgetize-index.html $APPS_ROOT/budgetize/index.html

echo "================================"
echo "Demo apps directory setup complete!"
echo "================================"
echo ""
echo "Directory structure created at: $APPS_ROOT"
echo ""
echo "Demo app locations:"
echo "  - Sales Flow:    $APPS_ROOT/salesflow"
echo "  - Book Browser:  $APPS_ROOT/bookbrowser"
echo "  - Budgetize:     $APPS_ROOT/budgetize"
echo ""
echo "Next steps:"
echo "1. Build your React apps: npm run build"
echo "2. Deploy builds using: ./08-deploy-react-app.sh"
echo "3. Update nginx configuration: sudo cp deployment/nginx-sjdev-with-apps.conf /etc/nginx/sites-available/sjdev.co"
echo "4. Test and reload nginx: sudo nginx -t && sudo systemctl reload nginx"

