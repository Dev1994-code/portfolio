#!/bin/bash

echo "🚀 Setting up Dawit's Portfolio..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create necessary directories
echo "📁 Creating directories..."
mkdir -p public/projects
mkdir -p public/images

# Copy example images (you'll need to replace these)
echo "🖼️  Setting up placeholder images..."
echo "Note: Replace placeholder images in public/ directory with your actual images"

# Set up environment variables
if [ ! -f .env.local ]; then
    echo "⚙️  Creating environment file..."
    cat > .env.local << EOL
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=dawit@example.com
EOL
fi

echo "✅ Setup complete!"
echo ""
echo "🎯 Next steps:"
echo "1. Replace placeholder images in public/ directory"
echo "2. Update personal information in components/"
echo "3. Add your actual projects data"
echo "4. Run 'npm run dev' to start development server"
echo ""
echo "🌐 Development server: http://localhost:3000"
echo "📚 Documentation: README.md"
