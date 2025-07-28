#!/bin/bash
set -e

echo "Starting build process..."

# Install dependencies
npm install

# Make vite executable
chmod +x node_modules/.bin/vite

# Run build
node_modules/.bin/vite build

# Copy new.html and Assets to dist
cp new.html dist/
cp -r Assets dist/

echo "Build completed successfully!" 