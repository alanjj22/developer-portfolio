#!/bin/bash

# 🚀 Quick Deployment Script for Developer Portfolio

echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🚀 Choose your deployment option:"
    echo "1. Vercel (Recommended)"
    echo "2. Netlify"
    echo "3. GitHub Pages"
    echo "4. Just build (manual upload)"
    echo ""
    read -p "Enter your choice (1-4): " choice

    case $choice in
        1)
            echo "🚀 Deploying to Vercel..."
            vercel --prod
            ;;
        2)
            echo "📦 Build ready for Netlify!"
            echo "Go to netlify.com and drag the 'dist' folder to deploy"
            ;;
        3)
            echo "📄 Deploying to GitHub Pages..."
            if command -v gh-pages &> /dev/null; then
                npm run deploy
            else
                echo "❌ gh-pages not installed. Run: npm install --save-dev gh-pages"
            fi
            ;;
        4)
            echo "📦 Build completed! Upload the 'dist' folder to your hosting service."
            ;;
        *)
            echo "❌ Invalid choice. Please run the script again."
            ;;
    esac
else
    echo "❌ Build failed! Please fix the errors and try again."
    exit 1
fi
