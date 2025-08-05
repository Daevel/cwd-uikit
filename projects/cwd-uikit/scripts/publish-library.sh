#!/bin/bash

set -e

cd "$(dirname "$0")/.."

echo "🔨 Building the library..."
npm run build:cwd

echo "✅ Build completed."

if ! npm whoami > /dev/null 2>&1; then
  echo "🔐 You are not logged in to npm. Please login."
  npm login
else
  echo "🔐 Already logged in as $(npm whoami)"
fi

current_version=$(node -p "require('./package.json').version")
echo "📦 Current version is $current_version"
read -p "Enter new version (or press Enter to auto-increment patch): " new_version

if [ -z "$new_version" ]; then
  echo "🔧 Auto-incrementing patch version..."
  npm version patch --no-git-tag-version
else
  echo "🔧 Setting version to $new_version..."
  npm version "$new_version" --no-git-tag-version
fi

echo "🚀 Publishing the library to npm..."
cd ../../dist/cwd-uikit
npm publish --access public

echo "🎉 Publish completed!"
